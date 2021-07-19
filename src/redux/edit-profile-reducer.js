const UPDATE_EMAIL_ON_EDIT_PROFILE_PAGE = 'UPDATE_EMAIL_ON_EDIT_PROFILE_PAGE';
const UPDATE_DISCOGS_USERNAME_ON_EDIT_PROFILE_PAGE = 'UPDATE_DISCOGS_USERNAME_ON_EDIT_PROFILE_PAGE';

let initialEditProfileState = {
  email: '',
  discogsUsername: ''
};

const editProfileReducer = (state = initialEditProfileState, action) => {
  switch (action.type) {
    case UPDATE_EMAIL_ON_EDIT_PROFILE_PAGE:
      return {
        ...state,
        email: action.email
      }
    case UPDATE_DISCOGS_USERNAME_ON_EDIT_PROFILE_PAGE:
      return {
        ...state,
        discogsUsername: action.discogsUsername
      }
    default:
      return state;
  }
};

export const updateDiscogsUsername = (discogsUsername) => (
  {
    type: UPDATE_DISCOGS_USERNAME_ON_EDIT_PROFILE_PAGE,
    discogsUsername
  }
);

export const updateEmail = (email) => (
  {
    type: UPDATE_EMAIL_ON_EDIT_PROFILE_PAGE,
    email
  }
);

export default editProfileReducer;
