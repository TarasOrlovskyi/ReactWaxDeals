import Registration from "./Registration";
import {connect} from "react-redux";
import {compose} from "redux";
import {registerUser, setRegistrationInfo} from "../../../redux/registration-reducer";
import React from "react";
import {setIsProfileDeleted} from "../../../redux/auth-reducer";

class RegistrationContainer extends React.Component {

  componentDidMount() {
    if (this.props.isProfileDeleted){
      setTimeout(()=> {
        this.props.setIsProfileDeleted(false);
      }, 10000);
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.isRegistrationSuccess){
      setTimeout(()=> {
        this.props.setRegistrationInfo(false);
      }, 10000);
    }
  }

  turnOffAlert = () => {
    this.props.setRegistrationInfo(false);
    this.props.setIsProfileDeleted(false);
  }

  render() {
    return (
      <Registration isRegistrationSuccess={this.props.isRegistrationSuccess}
                    turnOffAlert={this.turnOffAlert}
                    registerUser={this.props.registerUser}
                    isProfileDeleted={this.props.isProfileDeleted}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    isRegistrationSuccess: state.registrationPage.isRegistrationSuccess,
    isProfileDeleted: state.auth.isProfileDeleted
  };
};

export default compose(connect(mapStateToProps,
  {setRegistrationInfo, registerUser, setIsProfileDeleted}))(RegistrationContainer);