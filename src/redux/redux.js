import registrationReducer from "./registration-reducer";
import {combineReducers, createStore} from "redux";
import searchFieldReducer from "./search-field-reducer";
import signInReducer from "./sign-in-reducer";
import recoveryPasswordReducer from "./recovery-password-reducer";
import catalogReducer from "./catalog-reducer";
import editProfileReducer from "./edit-profile-reducer";
import changePasswordReducer from "./change-password-reducer";
import oneVinylReducer from "./one-vinyl-reducer";
import contactUsReducer from "./contact-us-reducer";
import storesReducer from "./stores-reducer";
import afterSearchReducer from "./after-search-reducer";

let reducers = combineReducers(
  {
    registrationPage: registrationReducer,
    catalogPage: catalogReducer,
    searchField: searchFieldReducer,
    editProfilePage: editProfileReducer,
    changePasswordPage: changePasswordReducer,
    signInPage: signInReducer,
    recoveryPasswordPage: recoveryPasswordReducer,
    oneVinylPage: oneVinylReducer,
    contactUsPage: contactUsReducer,
    storesPage: storesReducer,
    afterSearchPage: afterSearchReducer
  }
);

let reactStore = createStore(reducers);

window.reactStore = reactStore;

export default reactStore;