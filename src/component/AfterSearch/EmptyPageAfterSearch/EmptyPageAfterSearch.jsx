import EmptyPageStyle from "./EmptyPageAfterSearch.module.css";
import noResultSearchImage from "../../../assets/img/corrupted_vinyl.png";
import SearchFieldContainer from "../../SearchField/SearchFieldContainer";

const EmptyPageAfterSearch = () => {
  return (
      <main className="main">
        <div className="container subContainer">
          <div className="searchAreaWrapper">
            <div className="searchArea">
              <SearchFieldContainer/>
            </div>
          </div>
          <div className={EmptyPageStyle.EmptyPageContent}>
            <div className={EmptyPageStyle.EmptyPageBody}>
              <div className={EmptyPageStyle.EmptyPageText}>
                <p>Sorry, we couldn't process your search request. </p>
                <p>Please check the spelling and try once again. </p>
              </div>
              <div className={EmptyPageStyle.EmptyPageImage}>
                <p>Thank you.</p>
                <img className={EmptyPageStyle.vinylImage} src={noResultSearchImage} alt="no result search"/>
              </div>
            </div>
          </div>
        </div>
      </main>
  )
}

export default EmptyPageAfterSearch;