import vinylStyle from "../Vinyl.module.css";
import oneVinylPageStyle from "./OneVinylPage.module.css";
import VinylItem from "../VinylItem/VinylItem";
import React from "react";
import FirstVinylItem from "./FirstVinylItem/FirstVinylItem";
import VinylOfferList from "./VinylOfferList/VinylOfferList";
import SearchFieldContainer from "../../SearchField/SearchFieldContainer";

const OneVinylPage = (props) => {
  // document.body.style.background = `url(${process.env.PUBLIC_URL + 'assets/background.jpg'}) no-repeat fixed center`;
  // document.body.style.backgroundSize = "cover";
  return (
    <main className="main">

      <div className="container sub-container">

        <div className="searchArea">
          <SearchFieldContainer/>
        </div>

        <div className={vinylStyle.vinylsContent}>

          <div className={vinylStyle.vinylsContent__row}>
            <div className={oneVinylPageStyle.firstVinylsRow + ' ' + oneVinylPageStyle.firstVinylsRowOneVinyl}>

              <FirstVinylItem firstVinyl={props.firstVinyl}/>

              <VinylOfferList discogsLink={props.discogsLink} vinylOffersList={props.vinylOffersList}/>

            </div>
          </div>

          <p className={oneVinylPageStyle.contentTitle}>
            {(props.vinylsByArtist === 'undefined') ? 'No more release' : `More by ${props.firstVinyl.artist}`}
          </p>

          <div className={vinylStyle.vinylsContent__row}>
            <div className={vinylStyle.otherVinyls}>
              {
                props.vinylsByArtist.map(vinyl => <VinylItem
                  imageLink={vinyl.imageLink}
                  id={vinyl.id}
                  artist={vinyl.artist}
                  vinylRelease={vinyl.release}
                  loadOneVinyl={props.loadOneVinyl}
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