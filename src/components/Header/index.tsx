import { Link, useLocation, useNavigate } from "react-router-dom";
import homeIcon from "../../assets/icons/ic_home.svg";
import "./styles.scss";

const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <section className="header" id="header">
      <div className="header__logo">
        <h1>Recipe</h1>
        <h2>App</h2>
      </div>
      <div onClick={() => navigate("/")} className="header__menu-icon">
        <img src={homeIcon} alt="home" />
      </div>
      <div className="header__menu">
        <ul>
          <li>
            <Link
              to="/"
              className={`${pathname === "/" ? "header__menu--link" : ""}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/vegetarianos"
              className={`${
                pathname === "/vegetarianos" ? "header__menu--link" : ""
              }`}
            >
              Vegetarianos
            </Link>
          </li>
          <li>
            <Link
              to="/principales"
              className={`${
                pathname === "/principales" ? "header__menu--link" : ""
              }`}
            >
              Platos Principales
            </Link>
          </li>
          <li>
            <Link
              to="/tortas"
              className={`${
                pathname === "/tortas" ? "header__menu--link" : ""
              }`}
            >
              Tortas
            </Link>
          </li>
          <li>
            <Link
              to="/rapida"
              className={`${
                pathname === "/rapida" ? "header__menu--link" : ""
              }`}
            >
              Comida Rápida
            </Link>
          </li>
          <li>
            <Link
              to="/ninos"
              className={`${pathname === "/ninos" ? "header__menu--link" : ""}`}
            >
              Niños
            </Link>
          </li>
          <li>
            <Link
              to="/sopas"
              className={`${pathname === "/sopas" ? "header__menu--link" : ""}`}
            >
              Sopas
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Header;
