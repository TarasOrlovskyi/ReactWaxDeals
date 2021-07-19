import registrationReducer from "./registration-reducer";
import {combineReducers, createStore} from "redux";
import searchFieldReducer from "./search-field-reducer";
import signInReducer from "./sign-in-reducer";
import recoveryPasswordReducer from "./recovery-password-reducer";

let reducers = combineReducers(
  {
    registrationPage: registrationReducer,
    searchField: searchFieldReducer,
    signInPage: signInReducer,
    recoveryPasswordPage: recoveryPasswordReducer
  }
);

let reactStore = createStore(reducers);

export default reactStore;