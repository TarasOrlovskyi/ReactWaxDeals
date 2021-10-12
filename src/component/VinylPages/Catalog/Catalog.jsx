import React from "react";
import vinylStyle from './../Vinyl.module.css'
import VinylItem from "../VinylItem/VinylItem";
import SearchFieldContainer from "../../SearchField/SearchFieldContainer";

const Catalog = React.memo(({vinylList, isAuth, vinylListWithOffers, setVinylFilter, vinylFilter}) => {

  let vinyls = (vinylFilter === "inStockVinyls") ? vinylListWithOffers : vinylList;

  return (
      <main className="main">
        <div className="container subContainer">
          <div className="searchAreaWrapper">
            <div className="searchArea">
              <SearchFieldContainer/>
            </div>
          </div>
          <div className={vinylStyle.vinylsContent}>

            {
              (isAuth && vinylListWithOffers) &&
              <div className={vinylStyle.vinylsContent__filter}>
                <span className={vinylFilter === "allVinyls" && vinylStyle.vinylsContent__filter_active}
                      onClick={() => setVinylFilter("allVinyls")}>ALL</span>
                <span>&nbsp;/&nbsp;</span>
                <span className={vinylFilter === "inStockVinyls" && vinylStyle.vinylsContent__filter_active}
                      onClick={() => setVinylFilter("inStockVinyls")}>IN STOCK</span>
              </div>
            }

            <div className={vinylStyle.vinylsContent__row}>
              <div className={vinylStyle.otherVinyls}>
                {
                  vinyls.map(vinyl => <VinylItem
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