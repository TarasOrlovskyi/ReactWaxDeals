import s from './Store.module.css';

const Store = (props) => {
  return(
    <div className={s.allShops__item}>
      <a href={props.linkToShop} target="_blank">
        <img src={props.imageLink} alt="shop image" />
      </a>
    </div>
  );
}

export default Store;