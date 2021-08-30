import {connect} from "react-redux";
import ContactUs from "./ContactUs";
import {compose} from "redux";
import React from "react";
import {sendContactUsForm} from "../../redux/actions/contactUsActions";
import {withRouter} from "react-router-dom";
import {activateInfoAlert} from "../../redux/actions/alertActions";

class ContactUsContainer extends React.Component {

  turnOffAlert = () => {
    this.props.activateInfoAlert(false, "");
  }

  sendContactUsData = (formData) => {
    this.props.sendContactUsForm(formData.name, formData.email, formData.contactUsMessage, formData.recaptchaToken, this.props.history.push);
  }

  render() {
    return (
      <ContactUs onSubmit={this.sendContactUsData}
                 turnOffAlert={this.turnOffAlert}
                 isInfoAlert={this.props.isInfoAlert}
                 pageInfo={this.props.pageInfo}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    isInfoAlert: state.alert.isInfoAlert,
    pageInfo: state.alert.pageInfo
  };
};

export default compose(withRouter, connect(mapStateToProps, {
  activateInfoAlert,
  sendContactUsForm
}))(ContactUsContainer);
