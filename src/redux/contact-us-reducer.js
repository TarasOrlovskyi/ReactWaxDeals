const UPDATE_CONTACT_US_NAME = 'UPDATE_CONTACT_US_NAME';
const UPDATE_CONTACT_US_EMAIL = 'UPDATE_CONTACT_US_EMAIL';
const UPDATE_CONTACT_US_MESSAGE = 'UPDATE_CONTACT_US_MESSAGE';

let initialContactUsState = {
  name: '',
  email: '',
  message: ''
};

const contactUsReducer = (state = initialContactUsState, action) => {
  switch (action.type) {
    case UPDATE_CONTACT_US_NAME:
      return {
        ...state,
        name: action.name
      }
    case UPDATE_CONTACT_US_EMAIL:
      return {
        ...state,
        email: action.email
      }
    case UPDATE_CONTACT_US_MESSAGE:
      return {
        ...state,
        message: action.message
      }
    default:
      return state;
  }
};

export const changeName = (text) => (
  {
    type: UPDATE_CONTACT_US_NAME,
    name: text
  }
);

export const changeEmail = (text) => (
  {
    type: UPDATE_CONTACT_US_EMAIL,
    email: text
  }
);

export const changeMessage = (text) => (
  {
    type: UPDATE_CONTACT_US_MESSAGE,
    message: text
  }
);

export default contactUsReducer;