import vinylOfferListStyle from "../VinylOfferList.module.css";
import shopListNavStyle from "./ShopListNav.module.css";
import React from "react";
import DiscogsLink from "./DiscogsLink/DiscogsLink";

const ShopListNav = (props) => {
  return(
    <div className={vinylOfferListStyle.shopList__row + ' ' + shopListNavStyle.shopList__rowFirstTitle}>
      <div className={shopListNavStyle.shopList__item + ' ' + shopListNavStyle.shopList__firstItemTitle}>
        <div className={vinylOfferListStyle.shopList__title + ' ' + shopListNavStyle.shopList__menuItem_active}>
          Prices
        </div>
      </div>

      <DiscogsLink discogsLink={props.discogsLink}/>

    </div>
  );
}
export default ShopListNav;