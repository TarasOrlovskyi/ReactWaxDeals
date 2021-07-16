import React from "react";
import rectangleLineStyle from "./RectangleLine.module.css";
import rectangleLine from "../../../../assets/img/socialNetwork/Rectangle-line.png";

const RectangleLine = () => {
  return (
    <div className={rectangleLineStyle.contentSignIn__rectangleLine + ' rectangleLine'}>
      <img alt="rectangle-line" src={rectangleLine}/>
      <span className={rectangleLineStyle.rectangleLine__orBetweenLine}>or</span>
      <img alt="rectangle-line" src={rectangleLine}/>
    </div>
  );
}
export default RectangleLine;