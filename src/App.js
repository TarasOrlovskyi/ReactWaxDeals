import Home from "./component/Home/Home";
import Footer from "./component/Footer/Footer";
import {Route} from "react-router-dom";
import Profile from "./component/RegistrationPages/Profile/Profile";
import Stores from "./component/Stores/Stores";
import RegistrationContainer from "./component/RegistrationPages/Registration/RegistrationContainer";
import RecoveryPassword from "./component/RegistrationPages/RecoveryPassword/RecoveryPassword";
import About from "./component/About/About";
import Header from "./component/Header/Header";
import EditProfile from "./component/RegistrationPages/EditProfile/EditProfile";
import ChangePassword from "./component/RegistrationPages/ChangePassword/ChangePassword";
import SignIn from "./component/RegistrationPages/SignIn/SignIn";
import CatalogContainer from "./component/VinylPages/Catalog/CatalogContainer";

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
      <Route exact path="/signUp" render={() =>
        <RegistrationContainer/>
      }/>
      <Route exact path="/profile" render={() =>
        <Profile/>
      }/>
      <Route exact path="/edit-profile" render={() =>
        <EditProfile/>
      }/>
      <Route exact path="/recoveryPassword" render={() =>
        <RecoveryPassword/>
      }/>
      <Route exact path="/change-password" render={() =>
        <ChangePassword/>
      }/>
      <Route exact path="/stores" render={() =>
        <Stores/>
      }/>
      <Route exact path="/about" render={() =>
        <About/>
      }/>
      <Route exact path="/signIn" render={() =>
        <SignIn/>
      }/>
      <Footer/>
    </div>
  );
}

export default App;
