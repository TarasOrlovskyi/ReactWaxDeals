import vinylOfferListStyle from "../VinylOfferList.module.css";
import vinylOfferItemStyle from "./VinylOfferItem.module.css";
import React from "react";

const VinylOfferItem = React.memo(({vinylOffer}) => {
  return (
      <div className={vinylOfferListStyle.shopList__row}>
        <div className={vinylOfferItemStyle.itemBody + ' ' + vinylOfferItemStyle.shopList__itemImage}>
          <img src={'../' + process.env.PUBLIC_URL + 'assets/' + vinylOffer.shopImageLink} alt="shop icon"/>
        </div>
        <div className={vinylOfferItemStyle.itemBody + ' ' + vinylOfferListStyle.shopList__catalogWidth +
        ' ' + vinylOfferListStyle.shopList__itemDirection}>
          {vinylOffer.catNumber}
        </div>
        <div className={vinylOfferItemStyle.itemBody + ' ' + vinylOfferListStyle.shopList__stockWidth +
        ' ' + vinylOfferListStyle.shopList__itemDirection +
        ' ' + (vinylOffer.inStock ? vinylOfferItemStyle.inStock : vinylOfferItemStyle.outOfStock)}/>
        <div className={vinylOfferItemStyle.itemBody + ' ' + vinylOfferItemStyle.shopList__itemPrice +
        ' ' + vinylOfferListStyle.shopList__priceWidth + ' ' + vinylOfferListStyle.shopList__itemDirection}>
          {vinylOffer.price + ' ' + vinylOffer.currency}
        </div>
        <div className={vinylOfferItemStyle.itemBody + ' ' + vinylOfferListStyle.shopList__goToShopWidth +
        ' ' + vinylOfferListStyle.shopList__itemDirection}>
          <a href={vinylOffer.offerLink}
             className={vinylOfferItemStyle.button + ' ' + vinylOfferItemStyle.onStockButton}
             target="_blank" rel="noopener noreferrer">GO TO SHOP</a>
        </div>
      </div>
  );
})

export default VinylOfferItem;