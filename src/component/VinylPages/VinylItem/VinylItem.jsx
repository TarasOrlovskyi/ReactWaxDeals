import s from './VinylItem.module.css';

const VinylItem = (props) => {
  return (
    <div className={s.otherVinyls__item + ' ' + s.vinyl}>
      <a className={s.otherVinyls__image} href={'oneVinyl?id='+props.id}>
        <img src={props.imageLink} alt="vinyl image"/>
      </a>
      <a href={'oneVinyl?id='+props.id} className={s.otherVinyls__artist}>
        {props.artist}
        <span className={s.tipText + ' ' + s.tipTextOther}>{props.artist}</span>
      </a>
      <a href={'oneVinyl?id='+props.id} className={s.otherVinyls__release}>
        {props.vinylRelease}
        <span className={s.tipText + ' ' + s.tipTextOther}>{props.vinylRelease}</span>
      </a>
    </div>
  );
}

export default VinylItem;