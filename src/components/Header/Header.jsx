import Logo from "../../assetss/logo.png";
import Nav from './Nav/Nav'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={Logo} alt="LOGO"/>
      </div>

      <Nav/>

    </header>
  )
}

export default Header
