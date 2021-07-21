import firstVinylItemStyle from "./FirstVinylItem.module.css";
import vinylStyle from "../../Vinyl.module.css";
import noImage from '../../../../assets/img/no_image.jpg';
import React from "react";

const FirstVinylItem = (props) => {
  return (
    <div>
      <div className={firstVinylItemStyle.firstVinyl__wrapper}>
        <div className={firstVinylItemStyle.firstVinyl__item + ' ' + vinylStyle.vinyl}>
          <div className={firstVinylItemStyle.firstVinyl__image}>
            <img src=
                   {props.firstVinyl.imageLink
                     //props.firstVinyl.imageLink.includes('http') ? props.firstVinyl.imageLink : noImage
                   }
                 alt="first vinyl"/>
          </div>
          <div className={firstVinylItemStyle.firstVinyl__artist}>
            {props.firstVinyl.artist}
            <span
              className={firstVinylItemStyle.vinylTipText + ' ' + vinylStyle.tipText}>{props.firstVinyl.artist}</span>
          </div>
          <div className={firstVinylItemStyle.firstVinyl__release}>
            {props.firstVinyl.release}
            <span
              className={firstVinylItemStyle.vinylTipText + ' ' + vinylStyle.tipText}>{props.firstVinyl.release}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FirstVinylItem;