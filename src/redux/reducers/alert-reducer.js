import * as actionTypes from "../actions/actionTypes";

let initialAlertState = {
  isInfoAlert: false,
  isQuestionAlert: false,
  page: ""
}

const alertReducer = (state = initialAlertState, action) => {
  switch (action.type) {
    case actionTypes.SET_IS_INFO_ALERT:
      return {
        ...state,
        isInfoAlert: action.isInfoAlert,
        page: action.page
      }
    case actionTypes.SET_IS_QUESTION_ALERT:
      return {
        ...state,
        isQuestionAlert: action.isQuestionAlert,
        page: action.page
      }
    default:
      return state;
  }
}

export default alertReducer;