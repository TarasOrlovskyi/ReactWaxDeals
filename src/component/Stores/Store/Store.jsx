import s from './Store.module.css';

const Store = (props) => {
  return (
    <div className={s.allShops__item}>
      <a href={props.linkToShop} target="_blank" rel="noopener noreferrer">
        <img src={'../' + process.env.PUBLIC_URL + 'assets/' + props.imageLink} alt="shop item"/>
      </a>
    </div>
  );
}

export default Store;