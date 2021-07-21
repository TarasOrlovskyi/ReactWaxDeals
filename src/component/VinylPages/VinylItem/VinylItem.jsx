import vinylStyle from '../Vinyl.module.css';
import noImage from '../../../assets/img/no_image.jpg';
import React from "react";
import {NavLink} from "react-router-dom";

const VinylItem = (props) => {
  return (

        <div className={vinylStyle.otherVinyls__item + ' ' + vinylStyle.vinyl}>
          <NavLink to={'/oneVinyl/' + props.id} className={vinylStyle.otherVinyls__image}
                   onClick={props.loadOneVinyl ? ()=>props.loadOneVinyl(props.id) : ''}>
            <img src={props.imageLink.includes("http") ? props.imageLink : noImage} alt="vinyl image"/>
          </NavLink>
          <NavLink to={'/oneVinyl/' + props.id} className={vinylStyle.otherVinyls__artist}
                   onClick={props.loadOneVinyl ? ()=>props.loadOneVinyl(props.id) : null}>
            {props.artist}
            <span className={vinylStyle.tipText + ' ' + vinylStyle.tipTextOther}>{props.artist}</span>
          </NavLink>
          <NavLink to={'/oneVinyl/' + props.id} className={vinylStyle.otherVinyls__release}
                   onClick={props.loadOneVinyl ? ()=>props.loadOneVinyl(props.id) : null}>
            {props.vinylRelease}
            <span className={vinylStyle.tipText + ' ' + vinylStyle.tipTextOther}>{props.vinylRelease}</span>
          </NavLink>

    </div>
  );
}

export default VinylItem;