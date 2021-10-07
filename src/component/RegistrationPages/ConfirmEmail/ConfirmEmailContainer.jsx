import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import MessageAlert from "../../Common/Alert/MessageAlert";
import {NavLink, Redirect, withRouter} from "react-router-dom";
import alertsStyle from "../../Common/Alert/Alert.module.css";
import {confirmEmail} from "../../../redux/actions/confirmEmailActions";
import Preloader from "../../Common/Preloader/Preloader";

class ConfirmEmailContainer extends React.Component {

  componentDidMount() {
    let token = this.props.match.params.token;
    if (token) {
      this.props.confirmEmail(token, this.props.history.push);
    }
  }

  render() {

    if (this.props.isWaitResponse) {
      return <Preloader/>
    }

    if (this.props.isInfoAlert && this.props.pageInfo === "ConfirmEmail") {
      return <Redirect to='/signIn'/>
    }

    let alertString = <p>Sorry, but your link is incorrect! &nbsp; Please, <NavLink to='/contact'
                                                                                    className={alertsStyle.alert_navLink}>contact
      us</NavLink> or <NavLink
        to='/signUp' className={alertsStyle.alert_navLink}>sing up</NavLink>
    </p>
    return <MessageAlert messages={alertString}/>

  }
}

let mapStateToProps = (state) => ({
  isInfoAlert: state.alert.isInfoAlert,
  pageInfo: state.alert.pageInfo,
  isWaitResponse: state.preloader.isWaitResponse
})

export default compose(withRouter, connect(mapStateToProps, {confirmEmail}))(ConfirmEmailContainer);