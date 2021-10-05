import vinylStyle from "../Vinyl.module.css";
import oneVinylPageStyle from "./OneVinylPage.module.css";
import VinylItem from "../VinylItem/VinylItem";
import React from "react";
import FirstVinylItem from "./FirstVinylItem/FirstVinylItem";
import VinylOfferList from "./VinylOfferList/VinylOfferList";
import SearchFieldContainer from "../../SearchField/SearchFieldContainer";

const OneVinylPage = ({firstVinyl, discogsLink, vinylOffersList, vinylsByArtist, loadOneVinyl, isAuth}) => {

  return (
      <main className="main">
        <div className="container sub-container">
          <div className="searchArea">
            <SearchFieldContainer/>
          </div>
          <div className={vinylStyle.vinylsContent}>
            <div className={vinylStyle.vinylsContent__row}>
              <div className={oneVinylPageStyle.firstVinylsRow + ' ' + oneVinylPageStyle.firstVinylsRowOneVinyl}>
                <FirstVinylItem discogsLink={discogsLink} firstVinyl={firstVinyl} isAuth={isAuth}/>
                <VinylOfferList discogsLink={discogsLink} vinylOffersList={vinylOffersList}/>
              </div>
            </div>
            <p className={oneVinylPageStyle.contentTitle}>
              {(vinylsByArtist.length > 0) ? `More by ${firstVinyl.artist}` : 'No more release'}
            </p>
            <div className={vinylStyle.vinylsContent__row}>
              <div className={vinylStyle.otherVinyls}>
                {
                  (vinylsByArtist.length > 0) &&
                  vinylsByArtist.map(vinyl => <VinylItem
                      key={vinyl.id}
                      imageLink={vinyl.imageLink}
                      id={vinyl.id}
                      artist={vinyl.artist}
                      vinylRelease={vinyl.release}
                      loadOneVinyl={loadOneVinyl}
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

export default OneVinylPage;