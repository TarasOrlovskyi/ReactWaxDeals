import React from "react";
import catalogStyle from './Catalog.module.css';
import vinylStyle from './../Vinyl.module.css'
import VinylItem from "../VinylItem/VinylItem";
import SearchFieldContainer from "../../SearchField/SearchFieldContainer";

const Catalog = (props) => {
    document.body.style.background = "url(assets/background.jpg) no-repeat fixed center";
    document.body.style.backgroundSize = "cover";
    return (
      <main className="main">
        <div className="container subContainer">

          <div className="searchArea">
            <SearchFieldContainer/>
          </div>

          <div className={vinylStyle.vinylsContent}>
            <div className={catalogStyle.vinylsContent__row}>
              <div className={catalogStyle.otherVinyls}>
                {
                  props.vinylList.map(item => <VinylItem
                    imageLink={item.imageLink}
                    id={item.id}
                    artist={item.artist}
                    vinylRelease={item.release}
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