import React from "react";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

export const withBackground = (Component) => {
  class BackgroundChoice extends React.Component {
    render() {
      let uri = this.props.location.pathname;
      if (uri === '/') {
        return <div className="wrapper homeWrapper">
          <Component {...this.props}/>
        </div>
      }
      return <div className="wrapper">
        <Component {...this.props}/>
      </div>
    }
  }

  return compose(withRouter)(BackgroundChoice);
}