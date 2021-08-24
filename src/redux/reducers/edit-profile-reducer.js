// const SET_DELETE_PROFILE_QUESTION = "SET_DELETE_PROFILE_QUESTION";

import * as actionTypes from "../actions/actionTypes";

let initialEditProfileState = {
  isDeleteProfileQuestion: false
};

const editProfileReducer = (state = initialEditProfileState, action) => {
  switch (action.type) {
    case actionTypes.SET_DELETE_PROFILE_QUESTION:
      return {
        ...state,
        isDeleteProfileQuestion: action.isDeleteProfileQuestion
      }
    default:
      return state;
  }
};

// export const setIsDeleteProfileQuestion = (isDeleteProfileQuestion) => ({
//   type: SET_DELETE_PROFILE_QUESTION,
//   isDeleteProfileQuestion
// })

export default editProfileReducer;
