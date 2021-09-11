import React from "react";
import vinylStyle from './../Vinyl.module.css'
import VinylItem from "../VinylItem/VinylItem";
import SearchFieldContainer from "../../SearchField/SearchFieldContainer";

const Catalog = (props) => {
  return (
    <main className="main">
      <div className="container subContainer">
        <div className="searchArea">
          <SearchFieldContainer/>
        </div>
        <div className={vinylStyle.vinylsContent}>
          <div className={vinylStyle.vinylsContent__row}>
            <div className={vinylStyle.otherVinyls}>
              {
                props.vinylList.map(vinyl => <VinylItem
                  imageLink={vinyl.imageLink}
                  id={vinyl.id}
                  artist={vinyl.artist}
                  vinylRelease={vinyl.release}
                  key={vinyl.id}
                  isWantListItem={vinyl.isWantListItem}
                  isAuth={props.isAuth}
                  // vinylType="vinyls"
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