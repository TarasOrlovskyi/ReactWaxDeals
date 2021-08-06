import {NavLink} from "react-router-dom";
import registrationSignsStyle from "../RegistrationSigns.module.css";

const AuthedSigns = (props) => {
  return (
    <div className={registrationSignsStyle.header__loginSigns}>
      <NavLink to="/" className={registrationSignsStyle.header__loginButtons}>
        <span className={registrationSignsStyle.tooltiptext}>Log out</span>
        <img
          src="data:image/svg+xml,%3Csvg width='19' height='25' viewBox='0 0 19 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.86001 25H14.5087C14.7972 25 15.0313 24.7659 15.0313 24.4774V22.9094C15.0313 22.6209 14.7972 22.3868 14.5087 22.3868H3.86001C3.1722 22.3868 2.61323 21.8273 2.61323 21.14L2.61323 3.86C2.61323 3.17246 3.17273 2.61323 3.86001 2.61323H14.5087C14.7972 2.61323 15.0313 2.37909 15.0313 2.09059V0.522648C15.0313 0.234148 14.7972 0 14.5087 0H3.86001C1.73127 0 1.90735e-06 1.73179 1.90735e-06 3.86L1.90735e-06 21.1397C1.90735e-06 23.2682 1.73153 25 3.86001 25Z' fill='%23F6A325'/%3E%3Cg clip-path='url(%23clip0)'%3E%3Cpath d='M18.7603 11.9172L13.3433 6.50001C13.1886 6.34538 12.9825 6.2605 12.7628 6.2605C12.5428 6.2605 12.3368 6.3455 12.1822 6.50001L11.6904 6.99196C11.5358 7.14634 11.4507 7.35256 11.4507 7.57244C11.4507 7.79219 11.5358 8.00536 11.6904 8.15975L14.8506 11.3269H4.81042C4.35774 11.3269 4.00006 11.6813 4.00006 12.1341V12.8296C4.00006 13.2824 4.35774 13.6725 4.81042 13.6725H14.8864L11.6905 16.8574C11.536 17.012 11.4509 17.2126 11.4509 17.4325C11.4509 17.6521 11.536 17.8556 11.6905 18.0102L12.1823 18.5005C12.3369 18.6552 12.5429 18.7394 12.7629 18.7394C12.9827 18.7394 13.1888 18.6541 13.3434 18.4994L18.7604 13.0824C18.9154 12.9273 19.0007 12.7202 19.0001 12.5001C19.0005 12.2792 18.9154 12.072 18.7603 11.9172Z' fill='%23F6A325'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0'%3E%3Crect width='15' height='15' fill='white' transform='translate(4.00006 5)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A"
          alt="sign out"
          onClick={() => {
            props.logOut()}}/>
      </NavLink>
      <NavLink to="/profile" className={registrationSignsStyle.header__loginButtons}>
        <span className={registrationSignsStyle.tooltiptext}>Profile</span>
        <img
          src="data:image/svg+xml,%3Csvg width='35' height='25' viewBox='0 0 35 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30.9896 0.00012207H4.01057C1.79823 0.00012207 6.10352e-05 1.71267 6.10352e-05 3.81965V21.1806C6.10352e-05 23.2876 1.79823 25.0001 4.01057 25.0001H30.9896C33.2019 25.0001 35.0001 23.2876 35.0001 21.1806V3.81965C35.0001 1.71267 33.2019 0.00012207 30.9896 0.00012207ZM10.9376 5.55559C12.9472 5.55559 14.5833 7.11402 14.5833 9.02798C14.5833 10.9417 12.9472 12.5001 10.9376 12.5001C8.9279 12.5001 7.29182 10.9417 7.29182 9.02798C7.29182 7.11402 8.9279 5.55559 10.9376 5.55559ZM17.5001 18.403C17.5001 18.978 17.0101 19.4447 16.4063 19.4447H5.46881C4.86506 19.4447 4.37506 18.978 4.37506 18.403V17.7085C4.37506 15.6015 6.17323 13.8889 8.38557 13.8889H13.4896C15.7019 13.8889 17.5001 15.6015 17.5001 17.7085V18.403ZM29.5313 19.4447H21.5106C20.9068 19.4447 20.4168 18.978 20.4168 18.403C20.4168 17.828 20.9068 17.3613 21.5106 17.3613H29.5313C30.1351 17.3613 30.6251 17.828 30.6251 18.403C30.6251 18.978 30.1351 19.4447 29.5313 19.4447ZM29.5313 13.8889H21.5106C20.9068 13.8889 20.4168 13.4223 20.4168 12.8473C20.4168 12.2723 20.9068 11.8056 21.5106 11.8056H29.5313C30.1351 11.8056 30.6251 12.2723 30.6251 12.8473C30.6251 13.4223 30.1351 13.8889 29.5313 13.8889ZM29.5313 8.33346H21.5106C20.9068 8.33346 20.4168 7.86679 20.4168 7.29179C20.4168 6.71679 20.9068 6.25012 21.5106 6.25012H29.5313C30.1351 6.25012 30.6251 6.71679 30.6251 7.29179C30.6251 7.86679 30.1351 8.33346 29.5313 8.33346Z' fill='%23F6A325'/%3E%3C/svg%3E%0A"
          alt="profile"/>
      </NavLink>
    </div>
  );
}

export default AuthedSigns;