import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  let linkData = [
    { id: 1, to: "/profile", name: "Профиль" },
    { id: 2, to: "/messages", name: "Сообщения" },
    { id: 3, to: "/news", name: "Новости" },
    { id: 4, to: "/users", name: "Пользователи" },
  ];
  return (
    <nav className="header__nav">
      {linkData.map((link) => {
        return (
          <NavLink
            key={link.id}
            to={link.to}
            className={(className) =>
              className.isActive
                ? "header__nav--item header__nav--item__active"
                : "header__nav--item"
            }
          >
            {link.name}
          </NavLink>
        );
      })}
    </nav>
  );
};

export default Nav;
