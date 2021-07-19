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
        email: action.email
      }
    case UPDATE_SIGNIN_PASSWORD:
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
    type: UPDATE_SIGNIN_EMAIL,
    email
  }
);

export const updateSignInPassword = (password) => (
  {
    type: UPDATE_SIGNIN_PASSWORD,
    password
  }
);

export default signInReducer;