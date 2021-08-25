import {stopSubmit} from "redux-form";

export const handleFormsError = (formName, dispatch, errorMessage = "") => {
  let message = errorMessage.length > 0 ? errorMessage : "ERROR";
  dispatch(stopSubmit(formName, {_error: message}));
}

export const handleHttpError = (errorStatus, historyPush) => {
  if (errorStatus === 404) {
    historyPush('/404');
  } else {
    historyPush('/500');
  }
}

export const returnUnhandledRejection = (errorStatus) => {
  return new Promise((resolve, reject) => {
    console.log(`Crashed with ${errorStatus} code after registration`)
    reject(`Crashed with ${errorStatus} code after registration`);
  });
}