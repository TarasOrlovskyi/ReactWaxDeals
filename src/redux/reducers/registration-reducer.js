import {registrationApi} from "../../api/api";
import {reset, stopSubmit} from "redux-form";
import * as actionTypes from "../actions/actionTypes";

// const SET_REGISTRATION_INFO = 'SET_REGISTRATION_INFO';

// let initialRegistrationState = {
//   isRegistrationSuccess: false
// };
//
// const registrationReducer = (state = initialRegistrationState, action) => {
//   switch (action.type) {
//     case actionTypes.SET_REGISTRATION_INFO:
//       return {
//         ...state,
//         isRegistrationSuccess: action.isRegistrationSuccess
//       }
//     default:
//       return state;
//   }
// };

// export const setRegistrationInfo = (isRegistrationSuccess) => ({
//   type: SET_REGISTRATION_INFO,
//   isRegistrationSuccess
// })
//
// export const registerUser = (email, password, confirmPassword, discogsUserName) => dispatch => {
//   if (password !== confirmPassword){
//     dispatch(stopSubmit('registrationForm', {_error: 'Password and Confirm Password must match!'}));
//   } else {
//     registrationApi.registerUserRequest(email, password, confirmPassword, discogsUserName)
//       .then(responseData => {
//         if (responseData.data.resultCode === "0") {
//           dispatch(setRegistrationInfo(true));
//           dispatch(reset('registrationForm'));
//         } else {
//           let errorMessage = responseData.data.message.length > 0 ? responseData.data.message : "ERROR";
//           dispatch(stopSubmit('registrationForm', {_error: errorMessage}));
//         }
//       })
//   }
// }

// export default registrationReducer;