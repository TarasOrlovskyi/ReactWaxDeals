import HeaderMobile from "./HeaderMobile/Headers/HeaderMobile";
import HeaderLaptop from "./HeaderLaptop/HeaderLaptop";
import HeaderOneVinyl from "./HeaderMobile/HeaderOneVinyl/HeaderOneVinyl";

const Header = (props) => {
  return (
    <>
      {props.headerForRender === "oneVinylHeader" &&
      <HeaderOneVinyl/>
      }
      {(props.headerForRender === "headerWithLogo"
        || props.headerForRender === "registrationHeader"
        || props.headerForRender === "homeHeader") &&
      <HeaderMobile headerForRender={props.headerForRender}
                    isAuth={props.isAuth}
                    logOut={props.logOut}
      />
      }
      <HeaderLaptop isAuth={props.isAuth} logOut={props.logOut}/>
    </>
  );
}

export default Header;