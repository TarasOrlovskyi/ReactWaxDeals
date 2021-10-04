import vinylOfferListStyle from "./VinylOfferList.module.css";
import React from "react";
import ShopListNav from "./ShopListNav/ShopListNav";
import ShopListHeader from "./ShopListHeader/ShopListHeader";
import VinylOfferItem from "./VinylOfferItem/VinylOfferItem";

const VinylOfferList = (props) => {
  return (
    <div className={vinylOfferListStyle.shopsList}>
      <ShopListNav discogsLink={props.discogsLink}/>
      <ShopListHeader/>
      <div className={vinylOfferListStyle.shopList__column + ' ' + vinylOfferListStyle.shopList__scrollbar}>
        {
          (props.vinylOffersList.length > 0)
            ? props.vinylOffersList.map(offer => <VinylOfferItem
              key={offer.id}
              vinylOffer={offer}
            />)
            : "Sorry, but there is no offers"
        }
      </div>
    </div>
  );
}
export default VinylOfferList;