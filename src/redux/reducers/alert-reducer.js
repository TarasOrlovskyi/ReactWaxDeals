import * as actionTypes from "../actions/actionTypes";

let initialAlertState = {
  isInfoAlert: false,
  isQuestionAlert: false,
  pageInfo: "",
  pageQuestion: ""
}

const alertReducer = (state = initialAlertState, action) => {
  switch (action.type) {
    case actionTypes.SET_IS_INFO_ALERT:
      return {
        ...state,
        isInfoAlert: action.isInfoAlert,
        pageInfo: action.pageInfo
      }
    case actionTypes.SET_IS_QUESTION_ALERT:
      return {
        ...state,
        isQuestionAlert: action.isQuestionAlert,
        pageQuestion: action.pageQuestion
      }
    default:
      return state;
  }
}

export default alertReducer;