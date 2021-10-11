import vinylStyle from '../Vinyl.module.css';
import noImage from '../../../assets/img/no_image.jpg';
import React from "react";
import {NavLink} from "react-router-dom";
import WantListStarContainer from "../../Common/WantListStar/WantListStarContainer";

const VinylItem = React.memo(({id, loadOneVinyl, imageLink, artist, vinylRelease, isAuth, isWantListItem, hasOffers}) => {
  /*debugger*/
  return (
      <div className={vinylStyle.otherVinyls__item + ' ' + vinylStyle.vinyl}>
        <NavLink to={'/catalog/' + id} className={
          false
              ?  vinylStyle.otherVinyls__image
              :  vinylStyle.otherVinyls__image + ' ' + vinylStyle.otherVinyls__imageNoOffers
         }
                 onClick={loadOneVinyl ? () => loadOneVinyl(id) : null}>
          <img src={imageLink.includes("http") ? imageLink : noImage} alt="main vinyl"/>
          <span>OUT OF STOCK</span>
        </NavLink>
        <NavLink to={'/catalog/' + id} className={vinylStyle.otherVinyls__artist}
                 onClick={loadOneVinyl ? () => loadOneVinyl(id) : null}>
          {artist}
          <span className={vinylStyle.tipText + ' ' + vinylStyle.tipTextOther}>{artist}</span>
        </NavLink>
        <NavLink to={'/catalog/' + id} className={vinylStyle.otherVinyls__release}
                 onClick={loadOneVinyl ? () => loadOneVinyl(id) : null}>
          {vinylRelease}
          <span className={vinylStyle.tipText + ' ' + vinylStyle.tipTextOther}>{vinylRelease}</span>
        </NavLink>

        {isAuth &&
        <WantListStarContainer vinylId={id}
                               isWantListItem={isWantListItem}
        />
        }
      </div>
  );
})

export default VinylItem;