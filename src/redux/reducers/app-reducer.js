import * as actionTypes from "../actions/actionTypes";

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

export default appReducer;