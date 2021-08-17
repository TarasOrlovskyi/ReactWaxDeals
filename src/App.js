import Home from "./component/Home/Home";
import Footer from "./component/Footer/Footer";
import {Route, withRouter} from "react-router-dom";
import Stores from "./component/Stores/Stores";
import RegistrationContainer from "./component/RegistrationPages/Registration/RegistrationContainer";
import About from "./component/About/About";
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
import {Component} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import ConfirmEmailContainer from "./component/RegistrationPages/ConfirmEmail/ConfirmEmailContainer";
import ProfileContainer from "./component/RegistrationPages/Profile/ProfileContainer";
import EditProfile from "./component/RegistrationPages/EditProfile/EditProfile";

class App extends Component {

  componentDidMount() {
    this.props.initializeApp();
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
      <div className="wrapper">
        <HeaderContainer/>
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
        <Route exact path="/new-password" render={() =>
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
          <About/>
        }/>
        <Route exact path="/signIn" render={() =>
          <SignInContainer/>
        }/>
        <Route exact path="/search" render={() =>
          <AfterSearchContainer/>
        }/>
        <Route exact path="/emailConfirmation" render={() =>
          <ConfirmEmailContainer/>
        }/>
        <Footer/>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(withRouter, connect(mapStateToProps, {initializeApp}))(App);