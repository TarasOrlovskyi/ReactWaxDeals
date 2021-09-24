import React from "react";
import socialNetworkStyle from "./SocialNetwork.module.css";
import socialFacebook from "../../../../assets/img/socialNetwork/facebook.png";
import socialTwitter from "../../../../assets/img/socialNetwork/Twitter.png";
import socialGoogle from "../../../../assets/img/socialNetwork/google.png";
import GoogleLogin from "react-google-login";

const SocialNetwork = () => {

  const responseGoogle = (response) => {
    console.log(response);
  }

  return <div className={socialNetworkStyle.contentSignIn__socialNetwork}>
    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
      <img alt="social Facebook" src={socialFacebook}/>
    </a>
    <GoogleLogin
        //secret = echmvEkhzjZcFTX303G1x5zk
        clientId="490444479646-9oaqa9khqjia6k3goq2jukmu405pnb9u.apps.googleusercontent.com"
        render={renderProps => (
            <img alt="social Google"
                 src={socialGoogle}
                 onClick={renderProps.onClick}
                 className={socialNetworkStyle.contentSignIn_socialItem}
            />
        )}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
    />
    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
      <img alt="social Twitter" src={socialTwitter}/>
    </a>
  </div>
}
export default SocialNetwork;
