import * as actionTypes from "../actions/actionTypes";

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

export default newPasswordReducer;