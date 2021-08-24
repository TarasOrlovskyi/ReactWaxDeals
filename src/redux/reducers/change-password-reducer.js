import {authApi} from "../../api/api";
import {reset, stopSubmit} from "redux-form";
import * as actionTypes from "../actions/actionTypes";

// const SET_IS_PASSWORD_CHANGED = 'SET_IS_PASSWORD_CHANGED'

let initialChangePasswordState = {
  isPasswordChanged: false
};

const changePasswordReducer = (state = initialChangePasswordState, action) => {
  switch (action.type) {
    case actionTypes.SET_IS_PASSWORD_CHANGED:
      return {
        ...state,
        isPasswordChanged: action.isPasswordChanged
      }
    default:
      return state;
  }
};

// export const setIsPasswordChanged = (isPasswordChanged) => ({
//   type: SET_IS_PASSWORD_CHANGED,
//   isPasswordChanged
// })
//
// export const changePassword = (oldPassword, newPassword, confirmNewPassword) => dispatch => {
//   if (newPassword !== confirmNewPassword){
//     dispatch(stopSubmit('changePasswordForm', {_error: 'New Password and Confirm Password must match!'}));
//   } else {
//     let responseData = authApi.changePasswordRequest(oldPassword, newPassword, confirmNewPassword);
//     if (responseData.data.resultCode === "0") {
//       dispatch(setIsPasswordChanged(true));
//       dispatch(reset('changePasswordForm'));
//     } else {
//       let errorMessage = responseData.data.message.length > 0 ? responseData.data.message : "ERROR";
//       dispatch(stopSubmit('changePasswordForm', {_error: errorMessage}));
//     }
//   }
// }

export default changePasswordReducer;