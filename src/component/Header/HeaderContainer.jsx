import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getUserAuthData, getUserLogOutData} from "../../redux/auth-reducer";
import {compose} from "redux";

class HeaderContainer extends React.Component {

  componentDidMount() {
    this.props.getUserAuthData();
  }

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

export default compose(connect(mapStateToProps, {getUserAuthData, getUserLogOutData}))(HeaderContainer)