import React from "react";
import socialNetworkStyle from "./SocialNetwork.module.css";
import socialFacebook from "../../../../assets/img/socialNetwork/facebook.png";
import socialGoogle from "../../../../assets/img/socialNetwork/google.png";
import GoogleLogin from "react-google-login";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

const SocialNetwork = ({doGoogleLogIn}) => {

  const responseFacebook = (response) => {
    console.log(response);
  }

  const responseGoogle = (response) => {
    // response.setHeader("Cache-Control", "no-store");
    doGoogleLogIn(response.tokenId);
  }

  return <div className={socialNetworkStyle.contentSignIn__socialNetwork}>

    <FacebookLogin
        appId="4355604367855488"
        //secret 7653460ff238524b9bbf345ee15e99a5
        callback={responseFacebook}
        render={renderProps => (
            <img alt="social Facebook"
                 src={socialFacebook}
                 onClick={renderProps.onClick}
                 className={socialNetworkStyle.contentSignIn_socialItem}
            />
        )}
    />
    <GoogleLogin
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
  </div>
}
export default SocialNetwork;