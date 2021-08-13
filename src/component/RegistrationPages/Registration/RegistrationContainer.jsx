import Registration from "./Registration";
import {connect} from "react-redux";
import {compose} from "redux";
import {registerUser, setRegistrationInfo} from "../../../redux/registration-reducer";
import React from "react";

class RegistrationContainer extends React.Component {

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.isRegistrationSuccess){
      setTimeout(()=> {
        this.props.setRegistrationInfo(false);
      }, 10000);
    }
  }

  turnOffAlert = () => {
    this.props.setRegistrationInfo(false);
  }

  render() {
    return (
      <Registration isRegistrationSuccess={this.props.isRegistrationSuccess}
                    turnOffAlert={this.turnOffAlert}
                    registerUser={this.props.registerUser}/>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    isRegistrationSuccess: state.registrationPage.isRegistrationSuccess
  };
};

export default compose(connect(mapStateToProps,
  {setRegistrationInfo, registerUser}))(RegistrationContainer);