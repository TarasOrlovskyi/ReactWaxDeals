import React from "react";
import socialNetworkStyle from "./SocialNetwork.module.css";
import socialFacebook from "../../../../assets/img/socialNetwork/facebook.png";
import socialTwitter from "../../../../assets/img/socialNetwork/Twitter.png";
import socialGoogle from "../../../../assets/img/socialNetwork/google.png";

const SocialNetwork = () => {
  return <div className={socialNetworkStyle.contentSignIn__socialNetwork}>
    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><img alt="social Facebook" src={socialFacebook}/></a>
    <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer"><img alt="social Google" src={socialGoogle}/></a>
    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><img alt="social Twitter" src={socialTwitter}/></a>
  </div>
}
export default SocialNetwork;
