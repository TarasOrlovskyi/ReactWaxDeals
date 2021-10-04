import AuthedSigns from "./AuthedSigns/AuthedSigns";
import NotAuthedSigns from "./NotAuthedSigns/NotAuthedSigns";

const RegistrationSigns = (props) => {
  if (props.isAuth) return <AuthedSigns
      logOut={props.logOut}
      isAuthedUserWindow={props.isAuthedUserWindow}
      switchAuthedUserWindow={props.switchAuthedUserWindow}
  />
  return <NotAuthedSigns/>
}
export default RegistrationSigns;