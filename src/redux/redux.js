import registrationReducer from "./registration-reducer";
import {combineReducers, createStore} from "redux";
import searchFieldReducer from "./search-field-reducer";

let reducers = combineReducers(
  {
    registrationPage: registrationReducer,
    searchField: searchFieldReducer
  }
);

let reactStore = createStore(reducers);

export default reactStore;