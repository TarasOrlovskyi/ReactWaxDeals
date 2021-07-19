import {
  contactUsName,
  contactUsEmail,
  contactUsMessage
} from "../../redux/contact-us-reducer";
import {connect} from "react-redux";
import ContactUs from "./ContactUs";



let mapStateToProps = (state) => {
  return {
    contactUsPage: state.contactUsPagePage
  };
};

export default connect(mapStateToProps, {contactUsName, contactUsEmail, contactUsMessage})(ContactUs);
