import CardRecipes from "../../components/CardRecipes";
import TitleBody from "../../components/TitleBody";
import "./styles.scss";
import { useEffect, useState } from "react";
import { getVegetariansRecipes } from "../../netwotk/recipesService";
import { IVegetarian } from "../../netwotk/interface";

const Vegetarians = () => {
  const [vegetarianList, setVegetarianList] = useState<Array<IVegetarian>>();

  const getData = async () => {
    return setVegetarianList(await getVegetariansRecipes());
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <TitleBody title="Nuevas recetas" />
      <div className="home">
        {vegetarianList &&
          vegetarianList?.map((item) => (
            <CardRecipes
              title={item.title.substring(1, 7)}
              subtitle={item.sourceName.substring(1, 7)}
              image={item.image}
              isFavorite={item.vegetarian}
              points={item.weightWatcherSmartPoints}
              key={1}
            />
          ))}
      </div>
    </>
  );
};

export default Vegetarians;
