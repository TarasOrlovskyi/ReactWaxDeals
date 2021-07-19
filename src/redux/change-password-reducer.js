const UPDATE_OLD_PASSWORD_ON_CHANGE_PASSWORD_PAGE = 'UPDATE_OLD_PASSWORD_ON_CHANGE_PASSWORD_PAGE';
const UPDATE_NEW_PASSWORD_ON_CHANGE_PASSWORD_PAGE = 'UPDATE_NEW_PASSWORD_ON_CHANGE_PASSWORD_PAGE';
const UPDATE_CONFIRM_NEW_PASSWORD_ON_CHANGE_PASSWORD_PAGE = 'UPDATE_CONFIRM_NEW_PASSWORD_ON_CHANGE_PASSWORD_PAGE';

let initialChangePasswordState = {
  oldPassword: '',
  newPassword: '',
  confirmNewPassword: ''
};

const changePasswordReducer = (state = initialChangePasswordState, action) => {
  switch (action.type) {
    case UPDATE_OLD_PASSWORD_ON_CHANGE_PASSWORD_PAGE:
      return {
        ...state,
        oldPassword: action.oldPassword
      }
    case UPDATE_NEW_PASSWORD_ON_CHANGE_PASSWORD_PAGE:
      return {
        ...state,
        newPassword: action.newPassword
      }
    case UPDATE_CONFIRM_NEW_PASSWORD_ON_CHANGE_PASSWORD_PAGE:
      return {
        ...state,
        confirmNewPassword: action.confirmNewPassword
      }
    default:
      return state;
  }
};

export const updateOldPassword = (oldPassword) => (
  {
    type: UPDATE_OLD_PASSWORD_ON_CHANGE_PASSWORD_PAGE,
    oldPassword
  }
);

export const updateNewPassword = (newPassword) => (
  {
    type: UPDATE_NEW_PASSWORD_ON_CHANGE_PASSWORD_PAGE,
    newPassword
  }
);

export const updateConfirmNewPassword = (confirmNewPassword) => (
  {
    type: UPDATE_CONFIRM_NEW_PASSWORD_ON_CHANGE_PASSWORD_PAGE,
    confirmNewPassword
  }
);

export default changePasswordReducer;