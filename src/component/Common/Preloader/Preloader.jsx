import preloaderStyle from './Preloader.module.css';
import preloaderImage from '../../../assets/img/gif/preloader.gif';
import React from "react";

const Preloader = React.memo(() => {
  return (
      <div className={preloaderStyle.preloaderContent}>
        <div>
          <img src={preloaderImage} alt="preloader"/>
        </div>
      </div>
  )
})

export default Preloader;