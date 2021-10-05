import storeStyle from './Store.module.css';

const Store = ({linkToShop, imageLink}) => {
  return (
      <div className={storeStyle.allShops__item}>
        <a href={linkToShop} target="_blank" rel="noopener noreferrer">
          <img className={storeStyle.allShops__images} src={'../' + process.env.PUBLIC_URL + 'assets/' + imageLink}
               alt="shop item"/>
        </a>
      </div>
  );
}

export default Store;