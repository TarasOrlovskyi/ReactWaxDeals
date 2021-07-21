const UPDATE_EMAIL_ON_SIGN_IN_PAGE = 'UPDATE_EMAIL_ON_SIGN_IN_PAGE';
const UPDATE_PASSWORD_ON_SIGN_IN_PAGE = 'UPDATE_PASSWORD_ON_SIGN_IN_PAGE';

let initialSignInState = {
  email: '',
  password: '',
};

const signInReducer = (state = initialSignInState, action) => {
  switch (action.type) {
    case UPDATE_EMAIL_ON_SIGN_IN_PAGE:
      return {
        ...state,
        email: action.email
      }
    case UPDATE_PASSWORD_ON_SIGN_IN_PAGE:
      return {
        ...state,
        password: action.password
      }
    default:
      return state;
  }
};

export const updateSignInEmail = (email) => (
  {
    type: UPDATE_EMAIL_ON_SIGN_IN_PAGE,
    email
  }
);

export const updateSignInPassword = (password) => (
  {
    type: UPDATE_PASSWORD_ON_SIGN_IN_PAGE,
    password
  }
);

export default signInReducer;