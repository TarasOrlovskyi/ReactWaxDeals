import emptyListPageStyle from './EmptyListPage.module.css';
import vinylStyle from './../Vinyl.module.css'
import SearchFieldContainer from "../../SearchField/SearchFieldContainer";
import React from "react";
import {NavLink} from "react-router-dom";

const EmptyListPage = () => {
  return (
    <main className="main">
      <div className="container">
        <div className="searchAreaWrapper">
          <div className="searchArea">
            <SearchFieldContainer/>
          </div>
        </div>
        <div className={vinylStyle.vinylsContentWrapper}>
          <div className={emptyListPageStyle.searchNone}>
            <p className={emptyListPageStyle.searchNone__one}>Now your want list is empty.</p>
            <p className={emptyListPageStyle.searchNone__two}>Useful tips:</p>
            <ul className={emptyListPageStyle.searchNone__ulSearch}>
              <li>You can <NavLink to="/edit-profile" className="underlineLink">add your discogs username</NavLink> and we will
                show vinyls according to your discogs want list
              </li>
              <li>You can add the record on the website <a href="https://www.discogs.com/" className="underlineLink"
                                                           target="_blank" rel="noreferrer">www.discogs.com</a> to the want list
              </li>
              <li>Or on our website click the star on the record
              </li>
            </ul>
            <p className={emptyListPageStyle.searchNone__three}>Thank you.</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default EmptyListPage;