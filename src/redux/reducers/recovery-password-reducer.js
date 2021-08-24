import {authApi} from "../../api/api";
import {reset, stopSubmit} from "redux-form";
import * as actionTypes from "../actions/actionTypes";

// const SET_IS_RECOVERY_MAIL_SENT = 'SET_IS_RECOVERY_MAIL_SENT';

// let initialRecoveryPasswordState = {
//   isRecoveryMailSent: false
// };

// const recoveryPasswordReducer = (state = initialRecoveryPasswordState, action) => {
//   switch (action.type) {
//     case actionTypes.SET_IS_RECOVERY_MAIL_SENT:
//       return {
//         ...state,
//         isRecoveryMailSent: action.isRecoveryMailSent
//       }
//     default:
//       return state;
//   }
// };

// export const setIsRecoveryMailSent = (isRecoveryMailSent) => ({
//   type: SET_IS_RECOVERY_MAIL_SENT,
//   isRecoveryMailSent
// });
//
// export const sendRecoveryPasswordMail = (email) => dispatch => {
//   authApi.sendRecoveryPasswordRequest(email)
//     .then(responseData => {
//       if (responseData.data.resultCode === "0") {
//         dispatch(setIsRecoveryMailSent(true));
//         dispatch(reset('recoveryPasswordForm'));
//       } else {
//         let errorMessage = responseData.data.message.length > 0 ? responseData.data.message : "ERROR";
//         dispatch(stopSubmit('recoveryPasswordForm', {_error: errorMessage}));
//       }
//     })
// }

// export default recoveryPasswordReducer;