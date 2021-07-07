import SimpleHeader from "./component/Header/SimpleHeader";
import Home from "./component/Home/Home";
import Footer from "./component/Footer/Footer";
import {Route} from "react-router-dom";
import Catalog from "./component/VinylPages/Catalog/Catalog";
import SearchHeader from "./component/Header/SearchHeader";

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
          <Catalog />
        </>
      }/>
      <Footer/>
    </div>
  );
}

export default App;
