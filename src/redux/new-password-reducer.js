const UPDATE_NEW_PASSWORD_ON_NEW_PASSWORD_PAGE = 'UPDATE_NEW_PASSWORD_ON_NEW_PASSWORD_PAGE';
const UPDATE_CONFIRM_NEW_PASSWORD_ON_NEW_PASSWORD_PAGE = 'UPDATE_CONFIRM_NEW_PASSWORD_ON_NEW_PASSWORD_PAGE';

let initialNewPasswordState = {
  newPassword: '',
  confirmNewPassword: '',
};

const newPasswordReducer = (state = initialNewPasswordState, action) => {
  switch (action.type) {
    case UPDATE_NEW_PASSWORD_ON_NEW_PASSWORD_PAGE:
      return {
        ...state,
        newPassword: action.newPassword
      }
    case UPDATE_CONFIRM_NEW_PASSWORD_ON_NEW_PASSWORD_PAGE:
      return {
        ...state,
        confirmNewPassword: action.confirmNewPassword
      }
    default:
      return state;
  }
};

export const updateNewPassword = (newPassword) => (
  {
    type: UPDATE_NEW_PASSWORD_ON_NEW_PASSWORD_PAGE,
    newPassword
  }
);
export const updateConfirmNewPassword = (confirmNewPassword) => (
  {
    type: UPDATE_CONFIRM_NEW_PASSWORD_ON_NEW_PASSWORD_PAGE,
    confirmNewPassword
  }
);

export default newPasswordReducer;