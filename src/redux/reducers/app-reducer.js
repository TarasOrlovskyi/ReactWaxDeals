import * as actionTypes from "../actions/actionTypes";

// const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
  initialized: false
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true
      }
    default:
      return state;
  }
}

// export const initApp = () => ({
//   type: INITIALIZED_SUCCESS
// })
//
// export const initializeApp = () => (dispatch) => {
//   let authDataPromise = dispatch(getUserAuthData());
//   Promise.all([authDataPromise]).then(() => {
//     dispatch(initApp());
//   })
// }

export default appReducer;