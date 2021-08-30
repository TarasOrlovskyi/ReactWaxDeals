import * as actionTypes from "./actionTypes";

const setIsInfoAlert = (isInfoAlert, pageInfo) => ({
  type: actionTypes.SET_IS_INFO_ALERT,
  isInfoAlert,
  pageInfo
})

export const activateInfoAlert = (isInfoAlert, pageInfo) => dispatch => {
  dispatch(setIsInfoAlert(isInfoAlert, pageInfo));
  if (isInfoAlert) {
    setTimeout(() => {
      dispatch(setIsInfoAlert(false, ""));
    }, 10000);
  }
}

const setIsQuestionAlert = (isQuestionAlert, pageQuestion) => ({
  type: actionTypes.SET_IS_QUESTION_ALERT,
  isQuestionAlert,
  pageQuestion
})

export const activateQuestionAlert = (isQuestionAlert, pageQuestion) => dispatch => {
  dispatch(setIsQuestionAlert(isQuestionAlert, pageQuestion));
  if (isQuestionAlert) {
    setTimeout(() => {
      dispatch(setIsQuestionAlert(false, ""));
    }, 10000);
  }
}