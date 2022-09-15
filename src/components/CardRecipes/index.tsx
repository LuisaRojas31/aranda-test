import { ICardRecipes } from "./interface";
import "./styles.scss";
import startIcon from "../../assets/icons/ic_star.svg";
import favoriteIcon from "../../assets/icons/ic-favorite.svg";

const CardRecipes = ({
  title,
  subtitle,
  image,
  isFavorite,
  points,
}: ICardRecipes) => {
  return (
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
    </section>
  );
};

export default CardRecipes;
