const UPDATE_RECOVERY_EMAIL = 'UPDATE_RECOVERY_EMAIL';

let initialRecoveryPasswordState = {
  email: ''
};

const recoveryPasswordReducer = (state = initialRecoveryPasswordState, action) => {
  switch (action.type) {
    case UPDATE_RECOVERY_EMAIL:
      return {
        ...state,
        email: action.email
      }
    default:
      return state;
  }
};

export const updateRecoveryPasswordEmail = (email) => (
  {
    type: UPDATE_RECOVERY_EMAIL,
    email
  }
);

export default recoveryPasswordReducer;