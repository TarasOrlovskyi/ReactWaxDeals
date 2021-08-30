import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {
} from "../redux/actions/mobileActions";
import {withRouter} from "react-router-dom";

export const withHeaderSwitcher = (Component) => {
  class MobileHeaderChoice extends React.Component {

    componentDidMount() {
      this.checkHeader()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.state !== prevState)
      this.checkHeader()
    }

    checkHeader = () => {
      debugger
      this.props.setIsHeaderBackButton(false)
      this.props.setIsHomeHeader(false)
      this.props.setIsFormHeader(false)
      this.props.setIsWithLogoHeader(false)
      let path = this.props.location.pathname;
      if (path.includes("/oneVinyl")) {
        debugger
        this.props.setIsHeaderBackButton(true)
      } else if (path === "/") {
        debugger
        this.props.setIsHomeHeader(true)
      } else if (path.includes("/signUp") && path.includes("/profile") && path.includes("/about")) {
        debugger
        this.props.setIsFormHeader(true)
      } else {
        debugger
        this.props.setIsWithLogoHeader(true)
      }
    }

    render() {
      return <Component/>
    }
  }

  return compose(withRouter, connect(
    null,
    {}))(MobileHeaderChoice);
}