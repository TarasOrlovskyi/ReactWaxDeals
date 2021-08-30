import mobileStyle from "./FooterMobile.module.css";
import Copyright from "../Copyright/Copyright";

const FooterMobile = (props) => {
  return (
    <footer>
      <div className='container'>
        <div className={mobileStyle.footer__rowMobile}>
          <Copyright isMobile={props.isMobile}/>
        </div>
      </div>
    </footer>
  );
}

export default FooterMobile;