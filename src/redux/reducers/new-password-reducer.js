import {authApi} from "../../api/api";
import {stopSubmit} from "redux-form";
import * as actionTypes from "../actions/actionTypes";

// const SET_IS_WAIT_RECOVERY_RESPONSE = 'SET_IS_WAIT_RECOVERY_RESPONSE';
// const SET_IS_NEW_PASSWORD_UPDATED = 'SET_IS_NEW_PASSWORD_UPDATED';
// const SET_RECOVERY_DATA = 'SET_RECOVERY_DATA';
// const RESET_RECOVERY_DATA = 'RESET_RECOVERY_DATA';

let initialNewPasswordState = {
  isWaitRecoveryResponse: false,
  isNewPasswordUpdated: false,
  isRecoveryTokenValid: false,
  recoveryToken: null
};

const newPasswordReducer = (state = initialNewPasswordState, action) => {
  switch (action.type) {
    case actionTypes.SET_IS_WAIT_RECOVERY_RESPONSE:
      return {
        ...state,
        isWaitRecoveryResponse: action.isWaitRecoveryResponse
      }
    // case actionTypes.SET_IS_NEW_PASSWORD_UPDATED:
    //   return {
    //     ...state,
    //     isNewPasswordUpdated: action.isNewPasswordUpdated
    //   }
    case actionTypes.SET_RECOVERY_DATA:
      return {
        ...state,
        isRecoveryTokenValid: action.isRecoveryTokenValid,
        recoveryToken: action.recoveryToken
      }
    case actionTypes.RESET_RECOVERY_DATA:
      return {
        ...state,
        isRecoveryTokenValid: false,
        recoveryToken: null
      }
    default:
      return state;
  }
};

// export const setIsWaitRecoveryResponse = (isWaitRecoveryResponse) => ({
//   type: SET_IS_WAIT_RECOVERY_RESPONSE,
//   isWaitRecoveryResponse
// });
//
// export const setIsNewPasswordUpdated = (isNewPasswordUpdated) => ({
//   type: SET_IS_NEW_PASSWORD_UPDATED,
//   isNewPasswordUpdated
// });
//
// export const setRecoveryData = (recoveryToken, isRecoveryTokenValid) => ({
//   type: SET_RECOVERY_DATA,
//   recoveryToken,
//   isRecoveryTokenValid
// });
//
// export const resetRecoveryDataAfterChangePassword = () => ({
//   type: RESET_RECOVERY_DATA
// });
//
// export const checkRecoveryToken = (recoveryToken) => dispatch => {
//   dispatch(setIsWaitRecoveryResponse(true));
//   authApi.checkRecoveryTokenRequest(recoveryToken)
//     .then(responseData => {
//       if (responseData.data.resultCode === "0") {
//         dispatch(setRecoveryData(recoveryToken, true));
//       }
//       dispatch(setIsWaitRecoveryResponse(false));
//     })
// }
//
// export const changeRecoveryPassword = (newPassword, confirmNewPassword, recoveryToken) => dispatch => {
//   if (newPassword !== confirmNewPassword) {
//     dispatch(stopSubmit('newPasswordForm', {_error: 'Password and Confirm Password must match!'}));
//   } else {
//     authApi.changeRecoveryPasswordRequest(newPassword, confirmNewPassword, recoveryToken)
//       .then(responseData => {
//         if (responseData.data.resultCode === "0") {
//           dispatch(resetRecoveryDataAfterChangePassword());
//           dispatch(setIsNewPasswordUpdated(true));
//         } else {
//           let errorMessage = responseData.data.message.length > 0 ? responseData.data.message : "ERROR";
//           dispatch(stopSubmit('newPasswordForm', {_error: errorMessage}));
//         }
//       })
//   }
// }

export default newPasswordReducer;