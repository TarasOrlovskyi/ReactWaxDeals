const UPDATE_EMAIL_ON_REGISTRATION_PAGE = 'UPDATE_EMAIL_ON_REGISTRATION_PAGE';
const UPDATE_PASSWORD_ON_REGISTRATION_PAGE = 'UPDATE_PASSWORD_ON_REGISTRATION_PAGE';
const UPDATE_CONFIRM_PASSWORD_ON_REGISTRATION_PAGE = 'UPDATE_CONFIRM_PASSWORD_ON_REGISTRATION_PAGE';
const UPDATE_DISCOGS_USERNAME_ON_REGISTRATION_PAGE = 'UPDATE_DISCOGS_USERNAME_ON_REGISTRATION_PAGE';

let initialRegistrationState = {
  email: '',
  password: '',
  confirmPassword: '',
  discogsUsername: ''
};

const registrationReducer = (state = initialRegistrationState, action) => {
  switch (action.type) {
    case UPDATE_EMAIL_ON_REGISTRATION_PAGE:
      return {
        ...state,
        email: action.email
      }
    case UPDATE_PASSWORD_ON_REGISTRATION_PAGE:
      return {
        ...state,
        password: action.password
      }
    case UPDATE_CONFIRM_PASSWORD_ON_REGISTRATION_PAGE:
      return {
        ...state,
        confirmPassword: action.confirmPassword
      }
    case UPDATE_DISCOGS_USERNAME_ON_REGISTRATION_PAGE:
      return {
        ...state,
        discogsUsername: action.discogsUsername
      }
    default:
      return state;
  }
};

export const updateEmail = (email) => (
  {
    type: UPDATE_EMAIL_ON_REGISTRATION_PAGE,
    email
  }
);

export const updatePassword = (password) => (
  {
    type: UPDATE_PASSWORD_ON_REGISTRATION_PAGE,
    password
  }
);

export const updateConfirmPassword = (confirmPassword) => (
  {
    type: UPDATE_CONFIRM_PASSWORD_ON_REGISTRATION_PAGE,
    confirmPassword
  }
);

export const updateDiscogsUsername = (discogsUsername) => (
  {
    type: UPDATE_DISCOGS_USERNAME_ON_REGISTRATION_PAGE,
    discogsUsername
  }
);

export default registrationReducer;