import vinylStyle from '../Vinyl.module.css';
import noImage from '../../../assets/img/no_image.jpg';
import React from "react";
import {NavLink} from "react-router-dom";
import WantListStarContainer from "../../Common/WantListStar/WantListStarContainer";

const VinylItem = (props) => {
  return (
      <div className={vinylStyle.otherVinyls__item + ' ' + vinylStyle.vinyl}>
        <NavLink to={'/oneVinyl/' + props.id} className={vinylStyle.otherVinyls__image}
                 onClick={props.loadOneVinyl ? () => props.loadOneVinyl(props.id) : null}>
          <img src={props.imageLink.includes("http") ? props.imageLink : noImage} alt="main vinyl"/>
        </NavLink>
        <NavLink to={'/oneVinyl/' + props.id} className={vinylStyle.otherVinyls__artist}
                 onClick={props.loadOneVinyl ? () => props.loadOneVinyl(props.id) : null}>
          {props.artist}
          <span className={vinylStyle.tipText + ' ' + vinylStyle.tipTextOther}>{props.artist}</span>
        </NavLink>
        <NavLink to={'/oneVinyl/' + props.id} className={vinylStyle.otherVinyls__release}
                 onClick={props.loadOneVinyl ? () => props.loadOneVinyl(props.id) : null}>
          {props.vinylRelease}
          <span className={vinylStyle.tipText + ' ' + vinylStyle.tipTextOther}>{props.vinylRelease}</span>
        </NavLink>

        {props.isAuth &&
          <WantListStarContainer vinylId={props.id}
                                 isWantListItem={props.isWantListItem}
                                 // vinylType={props.vinylType}
          />
        }
        {/*<WantListStarContainer vinylId={props.id}*/}
        {/*                       isWantListItem={props.isWantListItem}*/}
        {/*                       vinylType={props.vinylType}*/}
        {/*/>*/}

      </div>
  );
}

export default VinylItem;