import vinylOfferListStyle from "./VinylOfferList.module.css";
import React from "react";
import ShopListNav from "./ShopListNav/ShopListNav";
import ShopListHeader from "./ShopListHeader/ShopListHeader";
import VinylOfferItem from "./VinylOfferItem/VinylOfferItem";

const VinylOfferList = React.memo(({discogsLink, vinylOffersList}) => {
  return (
      <div className={vinylOfferListStyle.shopsList}>
        <ShopListNav discogsLink={discogsLink}/>
        <ShopListHeader/>
        <div className={vinylOfferListStyle.shopList__column + ' ' + vinylOfferListStyle.shopList__scrollbar}>
          {
            (vinylOffersList.length > 0)
                ? vinylOffersList.map(offer => <VinylOfferItem
                    key={offer.id}
                    vinylOffer={offer}
                />)
                : "Sorry, but there is no offers"
          }
        </div>
      </div>
  );
})

export default VinylOfferList;