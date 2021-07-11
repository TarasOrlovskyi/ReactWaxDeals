const UPDATE_REGISTRATION_EMAIL = 'UPDATE_REGISTRATION_EMAIL';
const UPDATE_REGISTRATION_PASSWORD = 'UPDATE_REGISTRATION_PASSWORD';
const UPDATE_REGISTRATION_CONFIRM_PASSWORD = 'UPDATE_REGISTRATION_CONFIRM_PASSWORD';
const UPDATE_REGISTRATION_DISCOGS_USERNAME = 'UPDATE_REGISTRATION_DISCOGS_USERNAME';

let initialRegistrationState = {
  email: '',
  password: '',
  confirmPassword: '',
  discogsUsername: ''
};

const registrationReducer = (state = initialRegistrationState, action) => {
  switch (action.type) {
    case UPDATE_REGISTRATION_EMAIL:
      state.email = action.emailText;
      return state;
    case UPDATE_REGISTRATION_PASSWORD:
      state.password = action.passwordText;
      return state;
    case UPDATE_REGISTRATION_CONFIRM_PASSWORD:
      state.confirmPassword = action.confirmPasswordText;
      return state;
    case UPDATE_REGISTRATION_DISCOGS_USERNAME:
      state.discogsUsername = action.discogsUsernameText;
      return state;
    default:
      return state;
  }
};

export const changeEmailActionCreator = (text) => (
  {
    type: UPDATE_REGISTRATION_EMAIL,
    emailText: text
  }
);

export const changePasswordActionCreator = (text) => (
  {
    type: UPDATE_REGISTRATION_PASSWORD,
    passwordText: text
  }
);

export const changeConfirmPasswordActionCreator = (text) => (
  {
    type: UPDATE_REGISTRATION_CONFIRM_PASSWORD,
    confirmPasswordText: text
  }
);

export const changeDiscogsUsernameActionCreator = (text) => (
  {
    type: UPDATE_REGISTRATION_DISCOGS_USERNAME,
    discogsUsernameText: text
  }
);

export default registrationReducer;