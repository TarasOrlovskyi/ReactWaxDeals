import React from "react";
import socialNetworkStyle from "./SocialNetwork.module.css";
import socialFacebook from "../../../../assets/img/socialNetwork/facebook.png";
import socialTwitter from "../../../../assets/img/socialNetwork/Twitter.png";
import socialGoogle from "../../../../assets/img/socialNetwork/google.png";

const SocialNetwork = () => {
  return <div className={socialNetworkStyle.contentSignIn__socialNetwork}>
    <a href="#" target="_blank"><img alt="socialLogo" src={socialFacebook}/></a>
    <a href="#" target="_blank"><img alt="socialLogo" src={socialGoogle}/></a>
    <a href="#" target="_blank"><img alt="socialLogo" src={socialTwitter}/></a>
  </div>
}
export default SocialNetwork;
