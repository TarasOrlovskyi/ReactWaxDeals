import s from './Stores.module.css';
import Store from './Store/Store';
import imageLink from '../../assets/img/junorecords_logo.png';

const Stores = (props) => {
  let storesPage = {
    stores: [
      {
        id: 1,
        linkToShop: 'https://www.juno.co.uk/'
      },
      {
        id: 2,
        linkToShop: 'https://www.juno.co.uk/'
      },
      {
        id: 3,
        linkToShop: 'https://www.juno.co.uk/'
      },
      {
        id: 4,
        linkToShop: 'https://www.juno.co.uk/'
      },
      {
        id: 5,
        linkToShop: 'https://www.juno.co.uk/'
      },
      {
        id: 6,
        linkToShop: 'https://www.juno.co.uk/'
      },
      {
        id: 7,
        linkToShop: 'https://www.juno.co.uk/'
      },
      {
        id: 8,
        linkToShop: 'https://www.juno.co.uk/'
      },
      {
        id: 9,
        linkToShop: 'https://www.juno.co.uk/'
      },
      {
        id: 10,
        linkToShop: 'https://www.juno.co.uk/'
      }
    ]
  };

  document.body.style.background = "url(assets/background.jpg) no-repeat fixed center";
  document.body.style.backgroundSize = "cover";

  let stores = storesPage.stores.map(store => <Store linkToShop={store.linkToShop} imageLink={imageLink}
                                                     key={store.id}/>);
  return (
    <main className="main">
      <div className="container subContainer">

        <div className="searchArea">
        </div>

        <div className={s.shopsContent}>
          <div className={s.shopsContent__row}>
            <div className={s.allShops}>
              {stores}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Stores;