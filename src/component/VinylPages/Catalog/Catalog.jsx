import React from "react";
import vinylStyle from './../Vinyl.module.css'
import VinylItem from "../VinylItem/VinylItem";
import SearchFieldContainer from "../../SearchField/SearchFieldContainer";

const Catalog = ({vinylList, isAuth}) => {
  return (
      <main className="main">
        <div className="container subContainer">
          <div className="searchAreaWrapper">
            <div className="searchArea">
              <SearchFieldContainer/>
            </div>
          </div>
          <div className={vinylStyle.vinylsContent}>
            <div className={vinylStyle.vinylsContent__row}>
              <div className={vinylStyle.otherVinyls}>
                {
                  vinylList.map(vinyl => <VinylItem
                      imageLink={vinyl.imageLink}
                      id={vinyl.id}
                      artist={vinyl.artist}
                      vinylRelease={vinyl.release}
                      key={vinyl.id}
                      isWantListItem={vinyl.isWantListItem}
                      isAuth={isAuth}
                  />)
                }
              </div>
            </div>
          </div>
        </div>
      </main>
  );
}

export default Catalog;