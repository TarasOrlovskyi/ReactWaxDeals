import s from './Footer.module.css';
import SocialNav from "./SocialNav/SocialNav";
import Copyright from "./Copyright/Copyright";

const Footer = (props) => {
  return (
    <footer>
      <div className="container">
        <div className={s.footer__row}>
          <SocialNav/>
          <Copyright isMobile={props.isMobile}/>
        </div>
      </div>
    </footer>
  );
}

export default Footer;