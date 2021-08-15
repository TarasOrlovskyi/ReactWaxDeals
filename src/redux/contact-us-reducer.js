import {contactUsApi} from "../api/api";
import {reset, stopSubmit} from "redux-form";

const SET_IS_CONTACT_US_SUCCESS = 'SET_IS_CONTACT_US_SUCCESS';

let initialContactUsState = {
  isContactUsSuccess: false
};

const contactUsReducer = (state = initialContactUsState, action) => {
  switch (action.type) {
    case SET_IS_CONTACT_US_SUCCESS:
      return {
        ...state,
        isContactUsSuccess: action.isContactUsSuccess
      }
    default:
      return state;
  }
};

export const setIsContactUsSuccess = (isContactUsSuccess) => ({
  type: SET_IS_CONTACT_US_SUCCESS,
  isContactUsSuccess
})

export const sendContactUsForm = (name, email, contactUsMessage, recaptchaToken) => dispatch => {
  let responseData = contactUsApi.contactUsRequest(name, email, contactUsMessage, recaptchaToken);
  if (responseData.data.resultCode === "0"){
    dispatch(setIsContactUsSuccess(true));
    dispatch(reset('contactUsForm'));
  } else {
    let errorMessage = responseData.data.message.length > 0 ? responseData.data.message : "ERROR";
    dispatch(stopSubmit('contactUsForm', {_error: errorMessage}));
  }
}

export default contactUsReducer;