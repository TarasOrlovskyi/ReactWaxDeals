import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state) => ({
  isAuth: state.auth.isAuth
})

export const withAuthRedirect = (Component) => {
  class AuthRedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) {
        return <Redirect to='/signIn'/>
      }
      return <Component {...this.props}/>
    }
  }

  return connect(mapStateToPropsForRedirect)(AuthRedirectComponent);
}