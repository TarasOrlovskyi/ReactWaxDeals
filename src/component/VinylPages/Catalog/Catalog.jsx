import s from './Catalog.module.css';
import vinylStyle from './../Vinyl.module.css'
import VinylItem from "../VinylItem/VinylItem";

const Catalog = (props) => {
  let catalog = {
    vinylList: [
      {
        id: 1,
        imageLink: 'https://s3.eu-central-1.amazonaws.com/media.vinyl.ua/ReleaseCover/r-1927-8XXpfGuL.jpg',
        artist: 'artist1',
        vinylRelease: 'release1'
      },
      {
        id: 2,
        imageLink: 'https://s3.eu-central-1.amazonaws.com/media.vinyl.ua/ReleaseCover/r-1927-8XXpfGuL.jpg',
        artist: 'artist2',
        vinylRelease: 'release2'
      },
      {
        id: 3,
        imageLink: 'https://s3.eu-central-1.amazonaws.com/media.vinyl.ua/ReleaseCover/r-1927-8XXpfGuL.jpg',
        artist: 'artist3',
        vinylRelease: 'release3'
      }
    ]
  };
  let vinylItem = catalog.vinylList.map(item =>
    <VinylItem
      imageLink={item.imageLink}
      id={item.id}
      artist={item.artist}
      vinylRelease={item.vinylRelease}
    />);
  document.body.style.background = "url(assets/background.jpg) no-repeat fixed center";
  document.body.style.backgroundSize = "cover";
  return (
    <main className="main">
      <div className="container subContainer">
        <div className={vinylStyle.vinylsContent}>
          <div className={s.vinylsContent__row}>
            <div className={s.otherVinyls}>
              {vinylItem}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Catalog;