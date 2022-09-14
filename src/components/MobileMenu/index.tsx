import vegetarianIcon from "../../assets/icons/ic_vegetarian.svg";
import mainIcon from "../../assets/icons/ic_main.svg";
import cakeIcon from "../../assets/icons/ic_cake.svg";
import fastIcon from "../../assets/icons/ic_fast-food.svg";
import kidsIcon from "../../assets/icons/ic_kids.svg";
import soapIcon from "../../assets/icons/ic_soup.svg";
import "./styles.scss";
import { useNavigate } from "react-router-dom";

const menuList = [
  {
    icon: vegetarianIcon,
    text: "Vegetarianos",
    path: "vegetarianos",
  },
  {
    icon: mainIcon,
    text: "Principales",
    path: "principales",
  },
  {
    icon: cakeIcon,
    text: "Tortas",
    path: "tortas",
  },
  {
    icon: fastIcon,
    text: "Rápida",
    path: "rapida",
  },
  {
    icon: kidsIcon,
    text: "Menú niños",
    path: "ninos",
  },
  {
    icon: soapIcon,
    text: "Sopas",
    path: "sopas",
  },
];

const MobileMenu = () => {
  const navigate = useNavigate();
  return (
    <section className="mobile-menu" id="MobileMenu">
      {menuList.map((item) => (
        <div onClick={() => navigate(item.path)} className="mobile-menu__item">
          <img src={item.icon} alt={item.text} />
          <p>{item.text}</p>
        </div>
      ))}
    </section>
  );
};

export default MobileMenu;
