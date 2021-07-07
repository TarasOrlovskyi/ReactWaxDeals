import SimpleHeader from "./component/Header/SimpleHeader";
import Home from "./component/Home/Home";
import Footer from "./component/Footer/Footer";
import {Route} from "react-router-dom";

function App() {
  return (
    <div className="wrapper wrapperHome">
      <Route path="/" render={() =>
        <>
          <SimpleHeader/>
          <Home/>
        </>
      }/>
      <Footer/>
    </div>
  );
}

export default App;
