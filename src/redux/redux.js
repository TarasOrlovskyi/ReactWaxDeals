import registrationReducer from "./reducers/registration-reducer";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import searchFieldReducer from "./reducers/search-field-reducer";
import recoveryPasswordReducer from "./reducers/recovery-password-reducer";
import catalogReducer from "./reducers/catalog-reducer";
import editProfileReducer from "./reducers/edit-profile-reducer";
import changePasswordReducer from "./reducers/change-password-reducer";
import oneVinylReducer from "./reducers/one-vinyl-reducer";
import contactUsReducer from "./reducers/contact-us-reducer";
import storesReducer from "./reducers/stores-reducer";
import afterSearchReducer from "./reducers/after-search-reducer";
import newPasswordReducer from "./reducers/new-password-reducer";
import authReducer from "./reducers/auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form';
import appReducer from "./reducers/app-reducer";
import alertReducer from "./reducers/alert-reducer";

let reducers = combineReducers(
  {
    // registrationPage: registrationReducer,
    catalogPage: catalogReducer,
    searchField: searchFieldReducer,
    editProfilePage: editProfileReducer,
    changePasswordPage: changePasswordReducer,
    // recoveryPasswordPage: recoveryPasswordReducer,
    oneVinylPage: oneVinylReducer,
    // contactUsPage: contactUsReducer,
    storesPage: storesReducer,
    afterSearchPage: afterSearchReducer,
    newPasswordPage: newPasswordReducer,
    auth: authReducer,
    app: appReducer,
    alert: alertReducer,
    form: formReducer
  }
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)
));

window.reactStore = store;

export default store;