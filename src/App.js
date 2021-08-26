import Home from "./component/Home/Home";
import {Route, Switch, withRouter} from "react-router-dom";
import Stores from "./component/Stores/Stores";
import RegistrationContainer from "./component/RegistrationPages/Registration/RegistrationContainer";
import CatalogContainer from "./component/VinylPages/Catalog/CatalogContainer";
import EditProfileContainer from "./component/RegistrationPages/EditProfile/EditProfileContainer";
import ChangePasswordContainer from "./component/RegistrationPages/ChangePassword/ChangePasswordContainer";
import SignInContainer from "./component/RegistrationPages/SignIn/SignInContainer";
import RecoveryPasswordContainer from "./component/RegistrationPages/RecoveryPassword/RecoveryPasswordContainer";
import OneVinylPageContainer from "./component/VinylPages/OneVinylPage/OneVinylPageContainer";
import ContactUsContainer from "./component/Contact/ContactUsContainer";
import StoresContainer from "./component/Stores/StoresContainer";
import AfterSearchContainer from "./component/AfterSearch/AfterSearchContainer";
import NewPasswordContainer from "./component/RegistrationPages/NewPassword/NewPasswordContainer";
import HeaderContainer from "./component/Header/HeaderContainer";
import React, {Component} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import ConfirmEmailContainer from "./component/RegistrationPages/ConfirmEmail/ConfirmEmailContainer";
import ProfileContainer from "./component/RegistrationPages/Profile/ProfileContainer";
import NotFoundPage from "./component/ErrorComponents/NotFoundPage/NotFoundPage";
import WrongPage from "./component/ErrorComponents/WrongPage/WrongPage";
import {initializeApp} from "./redux/actions/appActions";
import {withBackground} from "./hoc/withBackground";
import {withMobileVersion} from "./hoc/withMobileVersion";
import {withHeaderBackButton} from "./hoc/withHeaderBackButton";
import AboutContainer from "./component/About/AboutContainer";
import FooterContainer from "./component/Footer/FooterContainer";

class App extends Component {

  catchAllUnhandledError = () => {
    this.props.history.push('/500')
  }

  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledError)
  }

  componentWillUnmount() {
    window.removeEventListener("unhandledrejection", this.catchAllUnhandledError)
  }

  render() {

    if (!this.props.initialized) {
      return (
        <div>
          Loading...
        </div>
      )
    }

    return (
      <>
        <HeaderContainer/>
        <Switch>
          <Route exact path="/" render={() =>
            <Home/>
          }/>
          <Route exact path="/catalog" render={() =>
            <CatalogContainer/>
          }/>
          <Route path="/oneVinyl/:id" render={() =>
            <OneVinylPageContainer/>
          }/>
          <Route exact path="/contact" render={() =>
            <ContactUsContainer/>
          }/>
          <Route exact path="/stores" render={() =>
            <StoresContainer/>
          }/>
          <Route exact path="/signUp" render={() =>
            <RegistrationContainer/>
          }/>
          <Route exact path="/profile" render={() =>
            <ProfileContainer/>
          }/>
          <Route exact path="/new-password/:token" render={() =>
            <NewPasswordContainer/>
          }/>
          <Route exact path="/edit-profile" render={() =>
            <EditProfileContainer/>
          }/>
          <Route exact path="/recovery-password" render={() =>
            <RecoveryPasswordContainer/>
          }/>
          <Route exact path="/change-password" render={() =>
            <ChangePasswordContainer/>
          }/>
          <Route exact path="/stores" render={() =>
            <Stores/>
          }/>
          <Route exact path="/about" render={() =>
            <AboutContainer/>
          }/>
          <Route exact path="/signIn" render={() =>
            <SignInContainer/>
          }/>
          <Route exact path="/search" render={() =>
            <AfterSearchContainer/>
          }/>
          <Route exact path="/email-confirmation/:token" render={() =>
            <ConfirmEmailContainer/>
          }/>
          <Route path="/500" render={() =>
            <WrongPage/>
          }/>
          <Route render={() =>
            <NotFoundPage/>
          }/>
        </Switch>
        <FooterContainer/>
      </>
    );
  }

}

let mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(withBackground, withMobileVersion, withHeaderBackButton, withRouter, connect(mapStateToProps, {initializeApp}))(App);