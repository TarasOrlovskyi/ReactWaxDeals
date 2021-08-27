import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {setIsHeaderBackButton} from "../redux/actions/mobileActions";
import {withRouter} from "react-router-dom";

export const withHeaderBackButton = (Component) => {
  class MobileHeaderChoice extends React.Component {

    // componentDidMount() {
    //   this.checkHeader()
    // }

    componentDidUpdate(prevProps, prevState, snapshot) {
      this.checkHeader()
    }

    checkHeader = () => {
      let path = this.props.location.pathname;
      if (path.includes("/oneVinyl")) {
        this.props.setIsHeaderBackButton(true)
      } else {
        this.props.setIsHeaderBackButton(false)
      }
    }

    render() {
      return <Component/>
    }
  }

  return compose(withRouter, connect(null, {setIsHeaderBackButton}))(MobileHeaderChoice);
}