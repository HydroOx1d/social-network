import { NavLink } from "react-router-dom";
import Logo from "../../assetss/logo.png";
import Nav from "./Nav/Nav";
import "./Header.css";

const Header = (props) => {
  if (!props.login && !props.isAuth) {
    return (
      <header className="header">
        <div className="header__logo">
          <img src={Logo} alt="LOGO" />
        </div>

        <Nav />

        <div className="header__login">
          <NavLink to="/login">Login</NavLink>
        </div>
      </header>
    );
  }
  return (

    <header className="header">
      <div className="header__logo">
        <img src={Logo} alt="LOGO" />
      </div>

      <Nav />

      <div className="header__login">
        {props.isAuth ? props.login : <NavLink to="/login">Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
