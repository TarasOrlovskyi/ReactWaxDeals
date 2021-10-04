import preloaderStyle from './Preloader.module.css';
import preloaderImage from '../../../assets/img/gif/preloader.gif';

const Preloader = (props) => {
  return (
      <div className={preloaderStyle.preloaderContent}>
        <div>
          <img src={preloaderImage} alt="preloader"/>
        </div>
      </div>
  )
}

export default Preloader;