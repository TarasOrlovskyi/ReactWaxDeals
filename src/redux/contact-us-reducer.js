const UPDATE_NAME_ON_CONTACT_US_PAGE = 'UPDATE_NAME_ON_CONTACT_US_PAGE';
const UPDATE_EMAIL_ON_CONTACT_US_PAGE = 'UPDATE_EMAIL_ON_CONTACT_US_PAGE';
const UPDATE_MESSAGE_ON_CONTACT_US_PAGE = 'UPDATE_MESSAGE_ON_CONTACT_US_PAGE';

let initialContactUsState = {
  name: '',
  email: '',
  message: ''
};

const contactUsReducer = (state = initialContactUsState, action) => {
  switch (action.type) {
    case UPDATE_NAME_ON_CONTACT_US_PAGE:
      return {
        ...state,
        name: action.name
      }
    case UPDATE_EMAIL_ON_CONTACT_US_PAGE:
      return {
        ...state,
        email: action.email
      }
    case UPDATE_MESSAGE_ON_CONTACT_US_PAGE:
      return {
        ...state,
        message: action.message
      }
    default:
      return state;
  }
};

export const updateName = (name) => (
  {
    type: UPDATE_NAME_ON_CONTACT_US_PAGE,
    name
  }
);

export const updateEmail = (email) => (
  {
    type: UPDATE_EMAIL_ON_CONTACT_US_PAGE,
    email
  }
);

export const updateMessage = (message) => (
  {
    type: UPDATE_MESSAGE_ON_CONTACT_US_PAGE,
    message
  }
);

export default contactUsReducer;