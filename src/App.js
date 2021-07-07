import SimpleHeader from "./component/Header/SimpleHeader";
import Home from "./component/Home/Home";
import Footer from "./component/Footer/Footer";
import {Route} from "react-router-dom";
import Catalog from "./component/VinylPages/Catalog/Catalog";
import SearchHeader from "./component/Header/SearchHeader";
import Profile from "./component/RegistrationPages/Profile/Profile";

function App() {
  return (
    <div className="wrapper">
      <Route exact path="/" render={() =>
        <>
          <SimpleHeader/>
          <Home />
        </>
      }/>
      <Route exact path="/catalog" render={() =>
        <>
          <SearchHeader />
          <Profile />
        </>
      }/>
      <Footer/>
    </div>
  );
}

export default App;
