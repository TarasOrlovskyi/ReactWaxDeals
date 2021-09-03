import React from "react";
import rectangleLineStyle from "./RectangleLine.module.css";
import rectangleLine from "../../../../assets/img/socialNetwork/Rectangle-line.png";

const RectangleLine = () => {
  return (
      <div className={rectangleLineStyle.contentSignIn__rectangleLine + ' rectangleLine'}>
        <span>or</span>
      </div>
  );
}
export default RectangleLine;