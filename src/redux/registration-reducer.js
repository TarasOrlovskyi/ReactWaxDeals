import {registrationApi} from "../api/api";
import {reset, stopSubmit} from "redux-form";

const SET_REGISTRATION_ALERT = 'SET_REGISTRATION_ALERT';

let initialRegistrationState = {
  isRegistrationAlert: false
};

const registrationReducer = (state = initialRegistrationState, action) => {
  switch (action.type) {
    case SET_REGISTRATION_ALERT:
      return {
        ...state,
        isRegistrationAlert: action.isRegistrationAlert
      }
    default:
      return state;
  }
};

export const setRegistrationAlert = (isRegistrationAlert) => ({
  type: SET_REGISTRATION_ALERT,
  isRegistrationAlert
})

export const registerUser = (email, password, confirmPassword, discogsUserName) => dispatch => {
  debugger;
  if (password !== confirmPassword){
    dispatch(stopSubmit('registrationForm', {_error: 'Password and Confirm Password must match!'}));
  } else {
    debugger;
    let responseData = registrationApi.registerUserRequest(email, password, confirmPassword, discogsUserName);
    if (responseData.data.resultCode === "0") {
      debugger;
      dispatch(setRegistrationAlert(true));
      dispatch(reset('registrationForm'));
    } else {
      let errorMessage = responseData.data.message.length > 0 ? responseData.data.message : "ERROR";
      dispatch(stopSubmit('registrationForm', {_error: errorMessage}));
    }
  }
  // registrationApi.registerUserRequest(email, password, confirmPassword, discogsUserName)
  //   .then(responseData => {
  //     if (responseData.data.resultCode === "0"){
  //       dispatch(setRegistrationMessage(responseData.data.message));
  //     } else {
  //       let errorMessage = responseData.data.message.length > 0 ? responseData.data.message : "ERROR";
  //       dispatch(stopSubmit('registrationForm', {_error: errorMessage}));
  //     }
  //   })
}

export default registrationReducer;