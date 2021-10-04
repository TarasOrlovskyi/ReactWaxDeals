import * as actionTypes from "../actions/actionTypes";

let initialPreloaderData = {
  isWaitResponse: false
}

const preloaderReducer = (state = initialPreloaderData, action) => {
  switch (action.type){
    case actionTypes.SET_IS_WAIT_RESPONSE:
      return {
        ...state,
        isWaitResponse: action.isWaitResponse
      }
    default:
      return state;
  }
}

export default preloaderReducer;