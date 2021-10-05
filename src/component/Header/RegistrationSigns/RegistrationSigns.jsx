import AuthedSigns from "./AuthedSigns/AuthedSigns";
import NotAuthedSigns from "./NotAuthedSigns/NotAuthedSigns";

const RegistrationSigns = ({isAuth, logOut, isAuthedUserWindow, switchAuthedUserWindow}) => {

  if (isAuth) return <AuthedSigns
      logOut={logOut}
      isAuthedUserWindow={isAuthedUserWindow}
      switchAuthedUserWindow={switchAuthedUserWindow}
  />
  return <NotAuthedSigns/>
}
export default RegistrationSigns;