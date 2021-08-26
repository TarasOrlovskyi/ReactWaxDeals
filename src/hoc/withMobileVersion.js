import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {setIsMobile} from "../redux/actions/mobileActions";

export const withMobileVersion = (Component) => {

  let mapStateToProps = (state) => ({
    isMobile: state.mobileVersion.isMobile
  })

  class MobileVersionChoice extends React.Component {
    componentDidMount() {
      if (window.innerWidth < 800) {
        this.props.setIsMobile(true)
      } else {
        this.props.setIsMobile(false)
      }
    }

    render() {
      if (this.props.isMobile){
        return <div className='mobileWrapper'>
          <Component {...this.props}/>
        </div>
      }
      return <Component {...this.props}/>
    }
  }

  return compose(connect(mapStateToProps, {setIsMobile}))(MobileVersionChoice);
}