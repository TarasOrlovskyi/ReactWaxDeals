import mobileStyle from "../../../../index.css";

const FooterMobile = () => {
  return (
    <footer>
      <div className={mobileStyle.containerMobile}>
        <div className={mobileStyle.footer__rowMobile}>
          <p className="copyright">&copy; 2021 Wax Deals. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default FooterMobile;