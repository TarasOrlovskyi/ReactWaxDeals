import Home from "./component/Home/Home";
import Footer from "./component/Footer/Footer";
import {Route} from "react-router-dom";
import Profile from "./component/RegistrationPages/Profile/Profile";
import Stores from "./component/Stores/Stores";
import RegistrationContainer from "./component/RegistrationPages/Registration/RegistrationContainer";
import About from "./component/About/About";
import Header from "./component/Header/Header";
import CatalogContainer from "./component/VinylPages/Catalog/CatalogContainer";
import EditProfileContainer from "./component/RegistrationPages/EditProfile/EditProfileContainer";
import ChangePasswordContainer from "./component/RegistrationPages/ChangePassword/ChangePasswordContainer";
import SignInContainer from "./component/RegistrationPages/SignIn/SignInContainer";
import RecoveryPasswordContainer from "./component/RegistrationPages/RecoveryPassword/RecoveryPasswordContainer";
import OneVinylPageContainer from "./component/VinylPages/OneVinylPage/OneVinylPageContainer";
import ContactUsContainer from "./component/Contact/ContactUsContainer";

function App() {
  return (
    <div className="wrapper">
      <Header/>
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
      <Route exact path="/signUp" render={() =>
        <RegistrationContainer/>
      }/>
      <Route exact path="/profile" render={() =>
        <Profile/>
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
      <Footer/>
    </div>
  );
}

export default App;
