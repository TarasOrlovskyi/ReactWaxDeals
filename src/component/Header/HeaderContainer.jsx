import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {compose} from "redux";
import {getUserLogOutData} from "../../redux/actions/authActions";

class HeaderContainer extends React.Component {

  logOut = () => {
    this.props.getUserLogOutData();
  }

  render() {
    return <Header {...this.props} logOut={this.logOut}/>
  }
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

export default compose(connect(mapStateToProps, {getUserLogOutData}))(HeaderContainer)