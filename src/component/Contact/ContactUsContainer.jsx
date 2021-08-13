import {connect} from "react-redux";
import ContactUs from "./ContactUs";
import {compose} from "redux";
import React from "react";
import {sendContactUsForm, setIsContactUsSuccess} from "../../redux/contact-us-reducer";

class ContactUsContainer extends React.Component{

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.isContactUsSuccess){
      setTimeout(()=> {
        this.props.setIsContactUsSuccess(false);
      }, 10000);
    }
  }

  turnOffAlert = () => {
    this.props.setIsContactUsSuccess(false);
  }

  render() {
    return(
      <ContactUs sendContactUsForm={this.props.sendContactUsForm}
                 turnOffAlert={this.turnOffAlert}
                 isContactUsSuccess={this.props.isContactUsSuccess}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    isContactUsSuccess: state.contactUsPage.isContactUsSuccess
  };
};

export default compose(connect(mapStateToProps, {setIsContactUsSuccess, sendContactUsForm}))(ContactUsContainer);
