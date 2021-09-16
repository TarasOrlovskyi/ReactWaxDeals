import {Route, Switch, withRouter} from "react-router-dom";
import HeaderContainer from "./component/Header/HeaderContainer";
import React, {Component} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializeApp} from "./redux/actions/appActions";
import {withBackground} from "./hoc/withBackground";
import FooterContainer from "./component/Footer/FooterContainer";

const Home = React.lazy(() => import('./component/Home/Home'));
const RegistrationContainer = React.lazy(() => import('./component/RegistrationPages/Registration/RegistrationContainer'));
const CatalogContainer = React.lazy(() => import('./component/VinylPages/Catalog/CatalogContainer'));
const EditProfileContainer = React.lazy(() => import('./component/RegistrationPages/EditProfile/EditProfileContainer'));
const ChangePasswordContainer = React.lazy(() => import('./component/RegistrationPages/ChangePassword/ChangePasswordContainer'));
const SignInContainer = React.lazy(() => import('./component/RegistrationPages/SignIn/SignInContainer'));
const RecoveryPasswordContainer = React.lazy(() => import('./component/RegistrationPages/RecoveryPassword/RecoveryPasswordContainer'));
const OneVinylPageContainer = React.lazy(() => import('./component/VinylPages/OneVinylPage/OneVinylPageContainer'));
const ContactUsContainer = React.lazy(() => import('./component/Contact/ContactUsContainer'));
const StoresContainer = React.lazy(() => import('./component/Stores/StoresContainer'));
const AfterSearchContainer = React.lazy(() => import('./component/AfterSearch/AfterSearchContainer'));
const NewPasswordContainer = React.lazy(() => import('./component/RegistrationPages/NewPassword/NewPasswordContainer'));
const ConfirmEmailContainer = React.lazy(() => import('./component/RegistrationPages/ConfirmEmail/ConfirmEmailContainer'));
const ProfileContainer = React.lazy(() => import('./component/RegistrationPages/Profile/ProfileContainer'));
const NotFoundPage = React.lazy(() => import('./component/ErrorComponents/NotFoundPage/NotFoundPage'));
const WrongPage = React.lazy(() => import('./component/ErrorComponents/WrongPage/WrongPage'));
const About = React.lazy(() => import('./component/About/About/About'));
React.lazy(() => import('./component/VinylPages/EmptyListPage/EmptyListPage'));
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
      <>
        <HeaderContainer/>
        <React.Suspense fallback={<div>Loading...</div>}>
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
            <Route exact path="/about" render={() =>
              <About/>
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
        </React.Suspense>
        <FooterContainer/>
      </>
    );
  }

}

let mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(withBackground, withRouter, connect(mapStateToProps, {initializeApp}))(App);