const UPDATE_EMAIL_ON_RECOVERY_PAGE = 'UPDATE_EMAIL_ON_RECOVERY_PAGE';

let initialRecoveryPasswordState = {
  email: ''
};

const recoveryPasswordReducer = (state = initialRecoveryPasswordState, action) => {
  switch (action.type) {
    case UPDATE_EMAIL_ON_RECOVERY_PAGE:
      return {
        ...state,
        email: action.email
      }
    default:
      return state;
  }
};

export const updateEmail = (email) => (
  {
    type: UPDATE_EMAIL_ON_RECOVERY_PAGE,
    email
  }
);

export default recoveryPasswordReducer;