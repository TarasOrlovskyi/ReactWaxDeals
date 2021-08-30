import s from './Footer.module.css';
import SocialNav from "./SocialNav/SocialNav";
import Copyright from "./Copyright/Copyright";

const Footer = (props) => {
  return (
    <footer>
      <div className="container">
        <div className={s.footer__row}>
          {props.headerForRender==="homeHeader" &&
            <SocialNav/>
          }
          <Copyright/>
        </div>
      </div>
    </footer>
  );
}

export default Footer;