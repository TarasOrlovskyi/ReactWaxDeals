import s from './Stores.module.css';
import Store from './Store/Store';
import imageLink from '../../assets/img/junorecords_logo.png';

const Stores = (props) => {

  let storesPage = {
    stores: [
      {
        linkToShop: 'https://www.juno.co.uk/'
      },
      {
        linkToShop: 'https://www.juno.co.uk/'
      },
      {
        linkToShop: 'https://www.juno.co.uk/'
      },
      {
        linkToShop: 'https://www.juno.co.uk/'
      },
      {
        linkToShop: 'https://www.juno.co.uk/'
      },
      {
        linkToShop: 'https://www.juno.co.uk/'
      },
      {
        linkToShop: 'https://www.juno.co.uk/'
      },
      {
        linkToShop: 'https://www.juno.co.uk/'
      },
      {
        linkToShop: 'https://www.juno.co.uk/'
      },
      {
        linkToShop: 'https://www.juno.co.uk/'
      }
    ]
  };

  let stores =  storesPage.stores.map(store => <Store linkToShop={store.linkToShop} imageLink={imageLink} />);
  return(
    <main className="main">

      <div className="container subContainer">
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