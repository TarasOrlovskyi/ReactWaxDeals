import footerStyle from './Footer.module.css';
import SocialNav from "./SocialNav/SocialNav";
import Copyright from "./Copyright/Copyright";
import React from "react";

const Footer = React.memo(({headerForRender}) => {
  return (
      <footer>
        <div className="container">
          <div className={footerStyle.footer__body}>
          <span className={footerStyle.footer__mobile}>
          {headerForRender === "homeHeader"
              ? <>
                <SocialNav/>
                <Copyright/>
              </>
              : <Copyright/>
          }
          </span>
            <span className={footerStyle.footer__row}>
            <SocialNav/>
            <Copyright/>
          </span>

          </div>
        </div>
      </footer>
  );
})

export default Footer;