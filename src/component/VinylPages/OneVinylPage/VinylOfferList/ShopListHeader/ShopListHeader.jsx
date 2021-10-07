import vinylOfferListStyle from "../VinylOfferList.module.css";
import shopListHeader from "./ShopListHeader.module.css";
import React from "react";

const ShopListHeader = React.memo(() => {
  return (
      <div className={vinylOfferListStyle.shopList__row + ' ' + shopListHeader.shopList__rowSecondTitle}>
        <div className={shopListHeader.shopList__secondItemTitle}>
          <div className={vinylOfferListStyle.shopList__title + ' ' + shopListHeader.shopList__shopWidth +
          ' ' + vinylOfferListStyle.shopList__itemDirection}>
            Shops
          </div>
        </div>
        <div className={shopListHeader.shopList__secondItemTitle}>
          <div className={vinylOfferListStyle.shopList__title + ' ' + vinylOfferListStyle.shopList__catalogWidth +
          ' ' + vinylOfferListStyle.shopList__itemDirection}>
            Catalog No:
          </div>
        </div>
        <div className={shopListHeader.shopList__secondItemTitle}>
          <div className={vinylOfferListStyle.shopList__title + ' ' + vinylOfferListStyle.shopList__stockWidth +
          ' ' + vinylOfferListStyle.shopList__itemDirection}>
            Stock
          </div>
        </div>
        <div className={shopListHeader.shopList__secondItemTitle}>
          <div className={vinylOfferListStyle.shopList__title + ' ' + vinylOfferListStyle.shopList__priceWidth +
          ' ' + vinylOfferListStyle.shopList__itemDirection}>
            Price
          </div>
        </div>
        <div className={shopListHeader.shopList__secondItemTitle}>
          <div className={vinylOfferListStyle.shopList__title + ' ' + vinylOfferListStyle.shopList__goToShopWidth +
          ' ' + vinylOfferListStyle.shopList__itemDirection}/>
        </div>
      </div>
  );
})

export default ShopListHeader;