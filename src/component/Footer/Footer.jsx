import s from './Footer.module.css';
import SocialNav from "./SocialNav/SocialNav";
import Copyright from "./Copyright/Copyright";

const Footer = () => {
  return(
    <footer>
      <div className="container">
        <div className={s.footer__row}>
          <SocialNav />
          <Copyright />
        </div>
      </div>
    </footer>
  );
}

export default Footer;