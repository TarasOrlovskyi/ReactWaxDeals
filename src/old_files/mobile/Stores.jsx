import s from './Stores.module.css';
import Store from './Store/Store';

const Stores = (props) => {

  let stores = {
    stores: [{
      id: 1,
      mainPageLink: 'https://www.juno.co.uk/',
      imageLink: 'img/mobile_stores/junorecords_logo.png',
    },
      {
        id: 2,
        mainPageLink: 'https://www.redeyerecords.co.uk/',
        imageLink: 'img/mobile_stores/redeyerecords_logo.png',
      },
      {
        id: 3,
        mainPageLink: 'https://www.hardwax.com/',
        imageLink: 'img/mobile_stores/hardwax_logo.png',
      },
      {
        id: 4,
        mainPageLink: 'https://www.decks.de/',
        imageLink: 'img/mobile_stores/decks.de_logo.png',
      },
      {
        id: 5,
        mainPageLink: 'https://www.deejay.de/',
        imageLink: 'img/mobile_stores/deejay.de_logo.png',
      },
      {
        id: 6,
        mainPageLink: 'https://clone.nl/',
        imageLink: 'img/mobile_stores/clone_logo.png',
      }
    ]
  }
  return (
    <main className="main">
      <div className="container subContainer">
        <div className="searchArea">
        </div>
        <div className={s.shopsContent}>
          <div className={s.shopsContent__row}>
            <div className={s.allShops}>
              {
                props.stores &&
                stores.stores.map(store => <Store linkToShop={store.mainPageLink}
                                                  imageLink={store.imageLink}
                                                  key={store.id}/>)
              }
            </div>
          </div>
        </div>
      </div>
    </main>
  )
    ;
}


export default Stores;