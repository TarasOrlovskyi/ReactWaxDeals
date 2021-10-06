import wrongPageStyle from "./WrongPage.module.css";
import SearchFieldContainer from "../../SearchField/SearchFieldContainer";
import wrongPageImage from "../../../assets/img/error_page_img.png";
import React from "react";

const WrongPage = React.memo(() => {
  return (
      <main className="main">
        <div className="container subContainer">
          <div className="searchArea">
            <SearchFieldContainer/>
          </div>
          <div className={wrongPageStyle.wrongPage__content}>
            <div className={wrongPageStyle.wrongPage__body}>
              <div className={wrongPageStyle.wrongPage__mainText}>
                <p className={wrongPageStyle.wrongPage__textRow}>Something went wrong... </p>
                <p>We are working on fixing the problem. </p>
                <p>Please try again.</p>
              </div>
              <div className={wrongPageStyle.wrongPage__image}>
                <img className={wrongPageStyle.vinylImage} src={wrongPageImage} alt="wrongPageImage"/>
              </div>
            </div>
          </div>
        </div>
      </main>
  )
})

export default WrongPage;