import copyrightStyle from './Copyright.module.css';
import React from "react";

const Copyright = React.memo(  () => {
  return (
      <p className={copyrightStyle.copyright}>&copy; 2021 Wax Deals. All rights reserved</p>
  );
})

export default Copyright;