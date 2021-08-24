import {connect} from "react-redux";
import ContactUs from "./ContactUs";
import {compose} from "redux";
import React from "react";
import {sendContactUsForm, setIsContactUsSuccess} from "../../redux/actions/contactUsActions";
import {withRouter} from "react-router-dom";
import EditProfile from "../RegistrationPages/EditProfile/EditProfile";
import {activateInfoAlert} from "../../redux/actions/alertActions";

class ContactUsContainer extends React.Component{

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   if (this.props.isContactUsSuccess){
  //     setTimeout(()=> {
  //       this.props.setIsContactUsSuccess(false);
  //     }, 10000);
  //   }
  // }

  turnOffAlert = () => {
    // this.props.setIsContactUsSuccess(false);
    this.props.activateInfoAlert(false, "");
  }

  sendContactUsData = (formData) => {
    this.props.sendContactUsForm(formData.name, formData.email, formData.contactUsMessage, formData.recaptchaToken, this.props.history.push);
  }

  render() {
    debugger
    return(
      <ContactUs onSubmit={this.sendContactUsData}
                 turnOffAlert={this.turnOffAlert}
                 isInfoAlert={this.props.isInfoAlert}
                 page={this.props.page}
                 // isContactUsSuccess={this.props.isContactUsSuccess}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    // isContactUsSuccess: state.contactUsPage.isContactUsSuccess
    isInfoAlert: state.alert.isInfoAlert,
    page: state.alert.page
  };
};

export default compose(withRouter, connect(mapStateToProps, {activateInfoAlert, sendContactUsForm}))(ContactUsContainer);
