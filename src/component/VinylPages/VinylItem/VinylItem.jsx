import vinylItemStyle from './VinylItem.module.css';
import noImage from '../../../assets/img/no_image.jpg';

const VinylItem = (props) => {
  return (
    <div className={vinylItemStyle.otherVinyls__item + ' ' + vinylItemStyle.vinyl}>
      <a className={vinylItemStyle.otherVinyls__image} href={'oneVinyl?id='+props.id}>
        <img src={props.imageLink.includes("http") ? props.imageLink : noImage} alt="vinyl image"/>
      </a>
      <a href={'oneVinyl?id='+props.id} className={vinylItemStyle.otherVinyls__artist}>
        {props.artist}
        <span className={vinylItemStyle.tipText + ' ' + vinylItemStyle.tipTextOther}>{props.artist}</span>
      </a>
      <a href={'oneVinyl?id='+props.id} className={vinylItemStyle.otherVinyls__release}>
        {props.vinylRelease}
        <span className={vinylItemStyle.tipText + ' ' + vinylItemStyle.tipTextOther}>{props.vinylRelease}</span>
      </a>
    </div>
  );
}

export default VinylItem;