const UPDATE_CHANGE_PASSWORD_OLD_PASSWORD = 'UPDATE_CHANGE_PASSWORD_OLD_PASSWORD';
const UPDATE_CHANGE_PASSWORD_NEW_PASSWORD = 'UPDATE_CHANGE_PASSWORD_NEW_PASSWORD';
const UPDATE_CHANGE_PASSWORD_CONFIRM_NEW_PASSWORD = 'UPDATE_CHANGE_PASSWORD_CONFIRM_NEW_PASSWORD';

let initialChangePasswordState = {
  oldPassword: '',
  newPassword: '',
  confirmNewPassword: ''
};

const changePasswordReducer = (state = initialChangePasswordState, action) => {
  switch (action.type) {
    case UPDATE_CHANGE_PASSWORD_OLD_PASSWORD:
      return {
        ...state,
        oldPassword: action.oldPassword
      }
    case UPDATE_CHANGE_PASSWORD_NEW_PASSWORD:
      return {
        ...state,
        newPassword: action.newPassword
      }
    case UPDATE_CHANGE_PASSWORD_CONFIRM_NEW_PASSWORD:
      return {
        ...state,
        confirmNewPassword: action.confirmNewPassword
      }
    default:
      return state;
  }
};

export const changeOldPassword = (text) => (
  {
    type: UPDATE_CHANGE_PASSWORD_OLD_PASSWORD,
    oldPasswordText: text
  }
);

export const changeNewPassword = (text) => (
  {
    type: UPDATE_CHANGE_PASSWORD_NEW_PASSWORD,
    newPasswordText: text
  }
);

export const changeConfirmNewPassword = (text) => (
  {
    type: UPDATE_CHANGE_PASSWORD_CONFIRM_NEW_PASSWORD,
    confirmNewPasswordText: text
  }
);

export default changePasswordReducer;