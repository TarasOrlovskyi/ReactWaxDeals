import vinylOfferListStyle from "../VinylOfferList.module.css";
import vinylOfferItemStyle from "./VinylOfferItem.module.css";
import React from "react";

const VinylOfferItem = (props) => {
  return (
    <div className={vinylOfferListStyle.shopList__row}>
      <div className={vinylOfferItemStyle.itemBody + ' ' + vinylOfferItemStyle.shopList__itemImage}>
        {/*<img src={'../../../../../../assets/' + props.vinylOffer.shopImageLink} alt="shop icon"/>*/}
        <img src={'../' + process.env.PUBLIC_URL + 'assets/' + props.vinylOffer.shopImageLink} alt="shop icon"/>

      </div>
      <div className={vinylOfferItemStyle.itemBody + ' ' + vinylOfferListStyle.shopList__catalogWidth +
      ' ' + vinylOfferListStyle.shopList__itemDirection}>
        {props.vinylOffer.catNumber}
      </div>
      <div className={vinylOfferItemStyle.itemBody + ' ' + vinylOfferListStyle.shopList__stockWidth +
      ' ' + vinylOfferListStyle.shopList__itemDirection +
      ' ' + (props.vinylOffer.inStock ? vinylOfferItemStyle.inStock : vinylOfferItemStyle.outOfStock)}/>
      <div className={vinylOfferItemStyle.itemBody + ' ' + vinylOfferItemStyle.shopList__itemPrice +
      ' ' + vinylOfferListStyle.shopList__priceWidth + ' ' + vinylOfferListStyle.shopList__itemDirection}>
        {props.vinylOffer.price + ' ' + props.vinylOffer.currency}
      </div>
      <div className={vinylOfferItemStyle.itemBody + ' ' + vinylOfferListStyle.shopList__goToShopWidth +
      ' ' + vinylOfferListStyle.shopList__itemDirection}>
        <a href={props.vinylOffer.offerLink}
           className={vinylOfferItemStyle.button + ' ' + vinylOfferItemStyle.onStockButton}
           target="_blank">GO TO SHOP</a>
      </div>
    </div>
  );
}
export default VinylOfferItem;