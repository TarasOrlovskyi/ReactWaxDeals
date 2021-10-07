import firstVinylItemStyle from "./FirstVinylItem.module.css";
import vinylStyle from "../../Vinyl.module.css";
import noImage from '../../../../assets/img/no_image.jpg';
import React from "react";
import WantListStarContainer from "../../../Common/WantListStar/WantListStarContainer";
import DiscogsLink from "../VinylOfferList/ShopListNav/DiscogsLink/DiscogsLink";

const FirstVinylItem = React.memo(({firstVinyl, isAuth, discogsLink}) => {

  return (

      <div className={firstVinylItemStyle.firstVinyl__wrapper}>
        <div className={firstVinylItemStyle.firstVinyl__item + ' ' + vinylStyle.vinyl}>
          <div className={firstVinylItemStyle.firstVinyl__image}>
            <img src=
                     {
                       (firstVinyl.imageLink + '').includes('http') ? firstVinyl.imageLink : noImage
                     }
                 alt="first vinyl"/>
            {isAuth &&
            <WantListStarContainer vinylId={firstVinyl.id}
                                   isWantListItem={firstVinyl.isWantListItem}
                                   vinylType="firstVinyl"
            />
            }
          </div>
          <div className={firstVinylItemStyle.firstVinyl__artist}>
            {firstVinyl.artist}
            <span
                className={firstVinylItemStyle.vinylTipText + ' ' + vinylStyle.tipText}>{firstVinyl.artist}</span>
          </div>
          <div className={firstVinylItemStyle.firstVinyl__release}>
            <span>{firstVinyl.release} </span>
            <div className={firstVinylItemStyle.firstVinyl__releaseLink}>
              <DiscogsLink discogsLink={discogsLink}/>
            </div>
            <span
                className={firstVinylItemStyle.vinylTipText + ' ' + vinylStyle.tipText}>{firstVinyl.release}</span>
          </div>

        </div>
      </div>
  );
})

export default FirstVinylItem;