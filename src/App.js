import {BrowserRouter, Route} from "react-router-dom";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import Footer from "./component/Footer/Footer";
import s from './Common.module.css';

function App() {
  return (
    <BrowserRouter>
      <div className={s.wrapper + ' ' + s.wrapperHome}>
        <Header />
        <Home />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
