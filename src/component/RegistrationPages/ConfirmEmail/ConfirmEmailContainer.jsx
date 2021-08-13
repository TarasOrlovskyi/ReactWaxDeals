import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {confirmEmail} from "../../../redux/auth-reducer";
import MessageAlert from "../../Common/Alert/MessageAlert";
import {NavLink, Redirect, withRouter} from "react-router-dom";
import alertsStyle from "../../Common/Alert/Alert.module.css";

class ConfirmEmailContainer extends React.Component{

  componentDidMount() {
    const search = this.props.location.search;
    const token = new URLSearchParams(search).get("token");
    this.props.confirmEmail(token);
  }

  render() {
    if (!this.props.isWaitResponse && !this.props.isMailConfirm) {
      let firstAlertString = <p>Sorry, but your link is incorrect!</p>
      let secondAlertString = <p>
        Please, <NavLink to='/contact' className={alertsStyle.alert_navLink}>contact us</NavLink> or <NavLink to='/signUp' className={alertsStyle.alert_navLink}>sing up</NavLink>
      </p>
      return <MessageAlert messages={[firstAlertString, secondAlertString]}/>
    }

    if (this.props.isMailConfirm) {
      return <Redirect to='/signIn'/>
    }

    return <div>Loading...</div>
  }
}

let mapStateToProps = (state) => ({
  isWaitResponse: state.auth.isWaitResponse,
  isMailConfirm: state.auth.isMailConfirm
})

export default compose(withRouter, connect(mapStateToProps, {confirmEmail}))(ConfirmEmailContainer);