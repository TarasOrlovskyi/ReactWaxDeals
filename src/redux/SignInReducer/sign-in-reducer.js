const UPDATE_SIGNIN_EMAIL = 'UPDATE_SIGNIN_EMAIL';
const UPDATE_SIGNIN_PASSWORD = 'UPDATE_SIGNIN_PASSWORD';

let initialSignInState = {
  email: '',
  password: '',
};

const signInReducer = (state = initialSignInState, action) => {
  switch (action.type) {
    case UPDATE_SIGNIN_EMAIL:
      return {
        ...state,
        email: action.emailText
      }
    case UPDATE_SIGNIN_PASSWORD:
      return {
        ...state,
        password: action.passwordText
      }

    default:
      return state;
  }
};

export const changeEmailActionCreator = (text) => (
  {
    type: UPDATE_SIGNIN_EMAIL,
    emailText: text
  }
);

export const changePasswordActionCreator = (text) => (
  {
    type: UPDATE_SIGNIN_PASSWORD,
    passwordText: text
  }
);

export default signInReducer;