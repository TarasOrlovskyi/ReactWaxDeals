import notFoundPageStyle from './NotFoundPage.css';
import notFoundPageImage from "../../../assets/img/not_found_logo.png";
import SearchFieldContainer from "../../SearchField/SearchFieldContainer";
import {NavLink} from "react-router-dom";

const NotFoundPage = () => {
  return (
    <main className="main">
      <div className="container subContainer">

        <div className="searchArea">
          <SearchFieldContainer/>
        </div>

        <div className={notFoundPageStyle.errorPage__content}>
          <div className={notFoundPageStyle.errorPage_body}>
            <div className={notFoundPageStyle.errorPage__image}>
              <img src={notFoundPageImage} alt="not found page error"/>
            </div>
            <div className={notFoundPageStyle.errorPage__title}>
              <h2>Error</h2>
              <p className={notFoundPageStyle.errorPage__text}>Sorry, we can't seem to find the page you're
                looking for.</p>
              <NavLink to="/" className={notFoundPageStyle.errorPage__redirectLink}>Go to homepage</NavLink>
              <span> / </span>
              <NavLink to="/contact" className={notFoundPageStyle.errorPage__redirectLink}>Contact us</NavLink>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default NotFoundPage;