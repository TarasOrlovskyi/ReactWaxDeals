import vinylOfferListStyle from "../VinylOfferList.module.css";
import shopListNavStyle from "./ShopListNav.module.css";
import React from "react";
import DiscogsLink from "./DiscogsLink/DiscogsLink";

const ShopListNav = ({discogsLink}) => {
  return (
      <div className={shopListNavStyle.shopList__rowFirstTitle}>
        <div className={shopListNavStyle.shopList__item + ' ' + shopListNavStyle.shopList__firstItemTitle}>
          <div className={vinylOfferListStyle.shopList__title + ' ' + shopListNavStyle.shopList__menuItem_active}>
            Prices
          </div>
        </div>

        <DiscogsLink discogsLink={discogsLink}/>

      </div>
  );
}
export default ShopListNav;