import React from "react";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {setIsAuthedUserWindow} from "../redux/actions/registrationSignsActions";
import {connect} from "react-redux";

export const withBackground = (Component) => {
  class BackgroundChoice extends React.Component {
    closeUserAuthedDialogs = () => {
      if (this.props.isAuthedUserWindow) {
        this.props.setIsAuthedUserWindow(false);
      }
    }
    render() {
      let uri = this.props.location.pathname;
      if (uri === '/') {
        return <div onClick={this.closeUserAuthedDialogs} className="wrapper homeWrapper">
          <Component {...this.props}/>
        </div>
      }
      return <div onClick={this.closeUserAuthedDialogs} className="wrapper">
        <Component {...this.props}/>
      </div>
    }
  }

  let mapStateToProps = (state) => ({
    isAuthedUserWindow: state.authedUserWindows.isAuthedUserWindow
  })



  return compose(withRouter, connect(mapStateToProps, {setIsAuthedUserWindow}))(BackgroundChoice);
}