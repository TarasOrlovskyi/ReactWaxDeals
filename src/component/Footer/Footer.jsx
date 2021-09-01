import s from './Footer.module.css';
import SocialNav from "./SocialNav/SocialNav";
import Copyright from "./Copyright/Copyright";

const Footer = (props) => {
  return (
    <footer>
      <div className="container">
        <div className={s.footer__body}>
          <span className={s.footer__mobile}>
          {props.headerForRender==="homeHeader"
            ? <>
              <SocialNav/>
              <Copyright/>
            </>
            : <Copyright/>
          }
          </span>
          <span className={s.footer__row}>
            <SocialNav/>
            <Copyright/>
          </span>

        </div>
      </div>
    </footer>
  );
}

export default Footer;