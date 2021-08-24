// import {contactUsApi} from "../../api/api";
// import {reset, stopSubmit} from "redux-form";
// import * as actionTypes from "../actions/actionTypes";

// const SET_IS_CONTACT_US_SUCCESS = 'SET_IS_CONTACT_US_SUCCESS';

// let initialContactUsState = {
//   isContactUsSuccess: false
// };

// const contactUsReducer = (state = initialContactUsState, action) => {
//   switch (action.type) {
//     case actionTypes.SET_IS_CONTACT_US_SUCCESS:
//       return {
//         ...state,
//         isContactUsSuccess: action.isContactUsSuccess
//       }
//     default:
//       return state;
//   }
// };

// export const setIsContactUsSuccess = (isContactUsSuccess) => ({
//   type: SET_IS_CONTACT_US_SUCCESS,
//   isContactUsSuccess
// })
//
// export const sendContactUsForm = (name, email, contactUsMessage, recaptchaToken) => dispatch => {
//   contactUsApi.contactUsRequest(name, email, contactUsMessage, recaptchaToken)
//     .then(responseData => {
//       debugger
//       if (responseData.status === 200){
//         dispatch(setIsContactUsSuccess(true));
//         dispatch(reset('contactUsForm'));
//       } else {
//         debugger
//         let errorMessage = responseData.data.message.length > 0 ? responseData.data.message : "ERROR";
//         dispatch(stopSubmit('contactUsForm', {_error: errorMessage}));
//       }
//     })
// }

// export default contactUsReducer;