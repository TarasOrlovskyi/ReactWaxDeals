import AuthedSigns from "./AuthedSigns/AuthedSigns";
import NotAuthedSigns from "./NotAuthedSigns/NotAuthedSigns";
import React from "react";

const RegistrationSigns = React.memo(({isAuth, logOut, isAuthedUserWindow, switchAuthedUserWindow}) => {

  if (isAuth) return <AuthedSigns
      logOut={logOut}
      isAuthedUserWindow={isAuthedUserWindow}
      switchAuthedUserWindow={switchAuthedUserWindow}
  />
  return <NotAuthedSigns/>
})

export default RegistrationSigns;