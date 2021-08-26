import copyrightStyle from './Copyright.module.css';

const Copyright = (props) => {
  return (
    <p className={props.isMobile ? copyrightStyle.copyrightMobile : copyrightStyle.copyright}>&copy; 2021 Wax Deals. All rights reserved</p>
  );
}

export default Copyright;