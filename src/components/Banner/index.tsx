import "./styles.scss";
import bannerImg from "../../assets/bcq.jpg";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { capitalizeFirstLetter } from "../../utils/capitalize";

const Banner = () => {
  const { pathname } = useLocation();
  const [title, setTitle] = useState<string>("/Recetas");

  useEffect(() => {
    if (pathname !== "/") {
      setTitle(pathname);
    } else {
      setTitle("/Recetas");
    }
  }, [pathname]);

  return (
    <section id="banner" className="banner">
      <img src={bannerImg} alt="banner" />
      <h1>{capitalizeFirstLetter(title.split("/")[1])}</h1>
      <h2>para todos</h2>
    </section>
  );
};

export default Banner;
