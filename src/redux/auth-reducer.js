import {authApi} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_LOG_OUT_USER_DATA = 'SET_LOG_OUT_USER_DATA';

let initialAuthUserData = {
  isAuth: false,
  discogsUserName: null,
  userRole: null,
  email: null
}

const authReducer = (state = initialAuthUserData, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true
      }
      case SET_LOG_OUT_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: false
      }
    default:
      return state;
  }
}

export const setAuthUserData = (discogsUserName, userRole, email) => ({
  type: SET_USER_DATA,
  data: {discogsUserName, userRole, email}
})

export const setLogOutUserData = (discogsUserName, userRole, email) => ({
  type: SET_LOG_OUT_USER_DATA,
  data: {discogsUserName, userRole, email}
})

export const getUserAuthData = () => {
  return (dispatch) => {
    authApi.checkAuth()
      .then(response => {
          if (response.data.resultCode === 1) {
            let {discogsUserName, userRole, email} = response.data;
            dispatch(setAuthUserData(discogsUserName, userRole, email));
          }
        }
      )
  }
}

export const getUserLogOutData = () => {
  return (dispatch) => {
    authApi.userLogOut()
      .then(response => {
          if (response.data.resultCode === 0) {
            let {discogsUserName, userRole, email} = response.data;
            dispatch(setLogOutUserData(discogsUserName, userRole, email));
          }
        }
      )
  }
}

export const getUserLogInData = (email, password) => {
  return (dispatch) => {
    authApi.userLogIn(email, password)
      .then(response => {
        debugger;
          if (response.data.resultCode === 1) {
            let {discogsUserName, userRole, email} = response.data;
            dispatch(setAuthUserData(discogsUserName, userRole, email));
          }
        }
      )
  }
}

export default authReducer;