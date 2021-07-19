import registrationReducer from "./registration-reducer";
import {combineReducers, createStore} from "redux";
import searchFieldReducer from "./search-field-reducer";
import catalogReducer from "./catalog-reducer";
import editProfileReducer from "./edit-profile-reducer";
import changePasswordReducer from "./change-password-reducer";

let reducers = combineReducers(
  {
    registrationPage: registrationReducer,
    catalogPage: catalogReducer,
    searchField: searchFieldReducer,
    editProfilePage: editProfileReducer,
    changePasswordPage: changePasswordReducer
  }
);

let reactStore = createStore(reducers);

export default reactStore;