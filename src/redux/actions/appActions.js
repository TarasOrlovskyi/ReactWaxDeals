import * as actionTypes from './actionTypes';
import {getUserAuthData} from "./authActions";

export const initApp = () => ({
  type: actionTypes.INITIALIZED_SUCCESS
})

export const initializeApp = () => (dispatch) => {
  let authDataPromise = dispatch(getUserAuthData());
  Promise.all([authDataPromise]).then(() => {
    dispatch(initApp());
  })
}