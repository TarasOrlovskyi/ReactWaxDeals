import React from "react";
import vinylStyle from './../Vinyl.module.css'
import VinylItem from "../VinylItem/VinylItem";
import SearchFieldContainer from "../../SearchField/SearchFieldContainer";

const Catalog = (props) => {
  // document.body.style.background = "url(assets/background.jpg) no-repeat fixed center";
  // document.body.style.backgroundSize = "cover";
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