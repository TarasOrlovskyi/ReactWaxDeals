import storesStyle from './Stores.module.css';
import Store from './Store/Store';
import React from "react";

const Stores = React.memo(({stores}) => {
  return (
      <main className="main">
        <div className="container subContainer">
          <div className="searchArea unsetHeightStores">
          </div>
          <div className={storesStyle.shopsContent}>
            <div className={storesStyle.shopsContent__row}>
              <div className={storesStyle.allShops}>
                {
                  !(stores + '').includes('undefined') &&
                  stores.map(store => <Store linkToShop={store.mainPageLink}
                                             imageLink={store.imageLink}
                                             key={store.id}/>)
                }
              </div>
            </div>
          </div>
        </div>
      </main>
  );
})

export default Stores;