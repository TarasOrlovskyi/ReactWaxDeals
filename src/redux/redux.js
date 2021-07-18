import registrationReducer from "./registration-reducer";
import {combineReducers, createStore} from "redux";
import searchFieldReducer from "./search-field-reducer";
import signInReducer from "./SignInReducer/sign-in-reducer";

let reducers = combineReducers(
  {
    registrationPage: registrationReducer,
    searchField: searchFieldReducer,
    signInPage: signInReducer
  }
);

let reactStore = createStore(reducers);

export default reactStore;