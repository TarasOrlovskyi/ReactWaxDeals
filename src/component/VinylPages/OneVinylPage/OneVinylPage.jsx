import vinylStyle from "../Vinyl.module.css";
import oneVinylPageStyle from "./OneVinylPage.module.css";
import VinylItem from "../VinylItem/VinylItem";
import React from "react";
import FirstVinylItem from "./FirstVinylItem/FirstVinylItem";
import VinylOfferList from "./VinylOfferList/VinylOfferList";
import SearchFieldContainer from "../../SearchField/SearchFieldContainer";

const OneVinylPage = (props) => {
  return (
    <main className="main">
      <div className="container sub-container">
        <div className="searchArea">
          <SearchFieldContainer/>
        </div>
        <div className={vinylStyle.vinylsContent}>
          <div className={vinylStyle.vinylsContent__row}>
            <div className={oneVinylPageStyle.firstVinylsRow + ' ' + oneVinylPageStyle.firstVinylsRowOneVinyl}>
              <FirstVinylItem firstVinyl={props.firstVinyl} isAuth={props.isAuth}/>
              <VinylOfferList discogsLink={props.discogsLink} vinylOffersList={props.vinylOffersList}/>
            </div>
          </div>
          <p className={oneVinylPageStyle.contentTitle}>
            {(props.vinylsByArtist.length > 0) ? `More by ${props.firstVinyl.artist}` : 'No more release'}
          </p>
          <div className={vinylStyle.vinylsContent__row}>
            <div className={vinylStyle.otherVinyls}>
              {
                (props.vinylsByArtist.length > 0) &&
                props.vinylsByArtist.map(vinyl => <VinylItem
                  imageLink={vinyl.imageLink}
                  id={vinyl.id}
                  artist={vinyl.artist}
                  vinylRelease={vinyl.release}
                  loadOneVinyl={props.loadOneVinyl}
                  key={vinyl.id}
                  isWantListItem={vinyl.isWantListItem}
                  isAuth={props.isAuth}
                  // vinylType="vinylsByArtist"
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