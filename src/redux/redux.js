import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import searchFieldReducer from "./reducers/search-field-reducer";
import catalogReducer from "./reducers/catalog-reducer";
import changePasswordReducer from "./reducers/change-password-reducer";
import oneVinylReducer from "./reducers/one-vinyl-reducer";
import storesReducer from "./reducers/stores-reducer";
import afterSearchReducer from "./reducers/after-search-reducer";
import newPasswordReducer from "./reducers/new-password-reducer";
import authReducer from "./reducers/auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form';
import appReducer from "./reducers/app-reducer";
import alertReducer from "./reducers/alert-reducer";
import mobileReducer from "./reducers/mobile-reducer";

let reducers = combineReducers(
  {
    catalogPage: catalogReducer,
    searchField: searchFieldReducer,
    changePasswordPage: changePasswordReducer,
    oneVinylPage: oneVinylReducer,
    storesPage: storesReducer,
    afterSearchPage: afterSearchReducer,
    newPasswordPage: newPasswordReducer,
    auth: authReducer,
    app: appReducer,
    alert: alertReducer,
    mobileVersion: mobileReducer,
    form: formReducer
  }
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 }) || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)
));

window.reactStore = store;

export default store;