import s from './Footer.module.css';
import cs from './../../Common.module.css';

const Footer = () => {
  return(
    <footer>
      <div className={cs.container}>
        <div className={s.footer__row}>
          <nav className={s.footer__socialNav}>
            <ul className={s.footer__socialIcons}>
              <li>
                <a href='#' className={s.footer__socialIcon + ' ' + s.facebook}></a>
              </li>
              <li>
                <a href="#" className={s.footer__socialIcon + ' ' + s.instagram}></a>
              </li>
              <li>
                <a href="#" className={s.footer__socialIcon + ' ' + s.youtube}></a>
              </li>
            </ul>
          </nav>
          <p className={s.copyright}>&copy; 2021 Wax Deals. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;