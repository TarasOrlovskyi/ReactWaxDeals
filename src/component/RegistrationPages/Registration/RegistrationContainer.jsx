import Registration from "./Registration";
import {connect} from "react-redux";
import {compose} from "redux";
import {registerUser, setRegistrationAlert} from "../../../redux/registration-reducer";
import React from "react";

class RegistrationContainer extends React.Component {

  turnOffAlert = () => {
    this.props.setRegistrationAlert(false);
  }

  render() {
    return (
      <Registration isRegistrationAlert={this.props.isRegistrationAlert}
                    turnOffAlert={this.turnOffAlert}
                    registerUser={this.props.registerUser}/>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    isRegistrationAlert: state.registrationPage.isRegistrationAlert
  };
};

export default compose(connect(mapStateToProps,
  {setRegistrationAlert, registerUser}))(RegistrationContainer);