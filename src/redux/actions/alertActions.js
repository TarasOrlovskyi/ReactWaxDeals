import * as actionTypes from "./actionTypes";

const setIsInfoAlert = (isInfoAlert, page) => ({
  type: actionTypes.SET_IS_INFO_ALERT,
  isInfoAlert,
  page
})

export const activateInfoAlert = (isInfoAlert, page) => dispatch => {
  dispatch(setIsInfoAlert(isInfoAlert, page));
  if (isInfoAlert) {
    setTimeout(() => {
      dispatch(setIsInfoAlert(false, ""));
    }, 10000);
  }
}

const setIsQuestionAlert = (isQuestionAlert, page) => ({
  type: actionTypes.SET_IS_QUESTION_ALERT,
  isQuestionAlert,
  page
})

export const activateQuestionAlert = (isQuestionAlert, page) => dispatch => {
  dispatch(setIsQuestionAlert(isQuestionAlert, page));
  if (isQuestionAlert) {
    setTimeout(() => {
      dispatch(setIsQuestionAlert(false, ""));
    }, 10000);
  }
}