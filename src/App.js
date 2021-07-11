import SimpleHeader from "./component/Header/SimpleHeader";
import Home from "./component/Home/Home";
import Footer from "./component/Footer/Footer";
import {Route} from "react-router-dom";
import Catalog from "./component/VinylPages/Catalog/Catalog";
import SearchHeader from "./component/Header/SearchHeader";
import Profile from "./component/RegistrationPages/Profile/Profile";
import Stores from "./component/Stores/Stores";
import RegistrationContainer from "./component/RegistrationPages/Registration/RegistrationContainer";
import RecoveryPassword from "./component/RegistrationPages/RecoveryPassword/RecoveryPassword";

function App(props) {
  return (
    <div className="wrapper">
      <Route exact path="/" render={() =>
        <>
          <SimpleHeader/>
          <Home store={props.store} />
        </>
      }/>
      <Route exact path="/catalog" render={() =>
        <>
          <SearchHeader store={props.store}/>
          <Catalog/>
        </>
      }/>
      <Route exact path="/signUp" render={() =>
        <>
          <SimpleHeader/>
          <RegistrationContainer store={props.store}/>
        </>
      }/>
      <Route exact path="/profile" render={() =>
        <>
          <SimpleHeader/>
          <Profile/>
        </>
      }/>
      <Route exact path="/recoveryPassword" render={() =>
        <>
          <SimpleHeader/>
          <RecoveryPassword/>
        </>
      }/>
      <Route exact path="/stores" render={() =>
        <>
          <SimpleHeader/>
          <Stores/>
        </>
      }/>
      <Footer/>
    </div>
  );
}

export default App;
