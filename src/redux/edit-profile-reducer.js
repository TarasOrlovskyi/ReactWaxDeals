const UPDATE_EDIT_PROFILE_EMAIL = 'UPDATE_EDIT_PROFILE_EMAIL';
const UPDATE_EDIT_PROFILE_DISCOGS_USERNAME = 'UPDATE_EDIT_PROFILE_DISCOGS_USERNAME';

let initialEditProfileState = {
  email: '',
  discogsUsername: ''
};

const editProfileReducer = (state = initialEditProfileState, action) => {
  switch (action.type) {
    case UPDATE_EDIT_PROFILE_EMAIL:
      return {
        ...state,
        email: action.emailText
      }
    case UPDATE_EDIT_PROFILE_DISCOGS_USERNAME:
      return {
        ...state,
        discogsUsername: action.discogsUsernameText
      }
    default:
      return state;
  }
};

export const changeEmail = (text) => (
  {
    type: UPDATE_EDIT_PROFILE_EMAIL,
    emailText: text
  }
);

export const changeDiscogsUsername = (text) => (
  {
    type: UPDATE_EDIT_PROFILE_DISCOGS_USERNAME,
    discogsUsernameText: text
  }
);

export default editProfileReducer;
