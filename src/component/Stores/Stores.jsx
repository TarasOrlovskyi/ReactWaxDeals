import s from './Stores.module.css';
import Store from './Store/Store';

const Stores = (props) => {

  return (
    <main className="main">
      <div className="container subContainer">
        <div className="searchArea">
        </div>
        <div className={s.shopsContent}>
          <div className={s.shopsContent__row}>
            <div className={s.allShops}>
              {
                !(props.stores + '').includes('undefined') &&
                props.stores.map(store => <Store linkToShop={store.mainPageLink}
                                                 imageLink={store.imageLink}
                                                 key={store.id}/>)
              }
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Stores;