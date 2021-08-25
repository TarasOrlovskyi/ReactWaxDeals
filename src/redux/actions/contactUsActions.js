import {contactUsApi} from "../../api/api";
import {reset} from "redux-form";
import {handleFormsError, handleHttpError, returnUnhandledRejection} from "../../utils/handleErrors/handleErrors";
import {activateInfoAlert} from "./alertActions";

export const sendContactUsForm = (name, email, contactUsMessage, recaptchaToken, historyPush) => async dispatch => {
  try {
    let responseData = await contactUsApi.contactUsRequest(name, email, contactUsMessage, recaptchaToken);
    if (responseData.status === 200) {
      dispatch(activateInfoAlert(true, "ContactUs"));
      dispatch(reset('contactUsForm'));
    }
  } catch (error) {
    let errorStatus = error.response.status;
    if (errorStatus === 404 || errorStatus === 500) {
      handleHttpError(errorStatus, historyPush)
    } else if (errorStatus === 400) {
      handleFormsError("contactUsForm", dispatch, error.response.data.message);
    } else {
      return returnUnhandledRejection(errorStatus);
    }
  }
}