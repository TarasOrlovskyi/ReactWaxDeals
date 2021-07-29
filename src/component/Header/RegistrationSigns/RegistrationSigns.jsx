import AuthedSigns from "./AuthedSigns/AuthedSigns";
import NotAuthedSigns from "./NotAuthedSigns/NotAuthedSigns";

const RegistrationSigns = (props) => {
  if (props.isAuth) return <AuthedSigns logOut={props.logOut}/>
  return <NotAuthedSigns/>
}

export default RegistrationSigns;