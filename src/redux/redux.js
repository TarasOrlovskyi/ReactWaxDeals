import registrationReducer from "./registration-reducer";
import {combineReducers, createStore} from "redux";
import searchFieldReducer from "./search-field-reducer";
import editProfileReducer from "./edit-profile-reducer";
import changePasswordReducer from "./change-password-reducer";
import contactUsReducer from "./contact-us-reducer";

let reducers = combineReducers(
  {
    registrationPage: registrationReducer,
    searchField: searchFieldReducer,
    editProfilePage: editProfileReducer,
    changePasswordPage: changePasswordReducer,
    contactUsPage: contactUsReducer
  }
);

let reactStore = createStore(reducers);

export default reactStore;