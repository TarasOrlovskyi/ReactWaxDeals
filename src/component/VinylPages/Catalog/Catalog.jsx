import React from "react";
import vinylStyle from './../Vinyl.module.css'
import VinylItem from "../VinylItem/VinylItem";
import SearchFieldContainer from "../../SearchField/SearchFieldContainer";
import {NavLink} from "react-router-dom";
import burgerMenuStyle from "../../Header/BurgerMenu/BurgerMenu.module.css";

const Catalog = React.memo(({vinylList, isAuth}) => {
  /*debugger*/
    return (
      <main className="main">
        <div className="container subContainer">
          <div className="searchAreaWrapper">
            <div className="searchArea">
              <SearchFieldContainer/>
            </div>
          </div>
          <div className={vinylStyle.vinylsContent}>

            {isAuth
                ? <div>ALL/IN STOCK</div>
                : null
            }

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
                      hasOffers={vinyl.hasOffers}
                  />)
                }
              </div>
            </div>
          </div>
        </div>
      </main>
  );
})

export default Catalog;