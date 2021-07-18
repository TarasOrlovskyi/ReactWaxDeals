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
      return {
        ...state,
        email: action.emailText
      }
    case UPDATE_REGISTRATION_PASSWORD:
      return {
        ...state,
        password: action.passwordText
      }
    case UPDATE_REGISTRATION_CONFIRM_PASSWORD:
      return {
        ...state,
        confirmPassword: action.confirmPassword
      }
    case UPDATE_REGISTRATION_DISCOGS_USERNAME:
      return {
        ...state,
        discogsUsername: action.discogsUsernameText
      }
    default:
      return state;
  }
};

export const updateEmail = (emailText) => (
  {
    type: UPDATE_REGISTRATION_EMAIL,
    emailText
  }
);

export const updatePassword = (passwordText) => (
  {
    type: UPDATE_REGISTRATION_PASSWORD,
    passwordText
  }
);

export const updateConfirmPassword = (confirmPasswordText) => (
  {
    type: UPDATE_REGISTRATION_CONFIRM_PASSWORD,
    confirmPasswordText
  }
);

export const updateDiscogsUsername = (discogsUsernameText) => (
  {
    type: UPDATE_REGISTRATION_DISCOGS_USERNAME,
    discogsUsernameText
  }
);

export default registrationReducer;