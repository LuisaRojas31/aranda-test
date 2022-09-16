import { ICardRecipes } from "./interface";
import "./styles.scss";
import startIcon from "../../assets/icons/ic_star.svg";
import favoriteIcon from "../../assets/icons/ic-favorite.svg";
import portion from "../../assets/icons/ic_portion.svg";
import time from "../../assets/icons/ic_time.svg";
import chef from "../../assets/icons/ic_chef.svg";

const CardRecipes = ({
  title,
  subtitle,
  image,
  isFavorite,
  points,
}: ICardRecipes) => {
  return (
    <>
      <section className="card-recipes">
        <img className="card-recipes__image" src={image} alt="imagen receta" />
        <div className="card-recipes__container-title">
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </div>
        <div className="card-recipes__container-footer">
          <div className="card-recipes__container-footer--points">
            <img src={startIcon} alt="estrella" />
            <span>{points}</span>
          </div>
          <div className="card-recipes__container-footer--favorite">
            {isFavorite && <img src={favoriteIcon} alt="favoritos" />}
          </div>
        </div>
        <section className="card-dos">
          <img className="card-dos__image" src={portion} alt="imagen receta" />
          <div className="card-dos__container-title">
            <h1>Tamaño de la porción</h1>
            <h2>4 Raciones</h2>
          </div>
          <img className="card-dos__image" src={time} alt="imagen receta" />
          <div className="card-dos__container-title">
            <h1>Tiempo de preparación</h1>
            <h2>10 Minutos</h2>
          </div>
          <img className="card-dos__image" src={chef} alt="imagen receta" />
          <div className="card-dos__container-title">
            <h1>Dificultad</h1>
            <h2>Fácil</h2>
          </div>
        </section>
      </section>
    </>
  );
};

export default CardRecipes;
