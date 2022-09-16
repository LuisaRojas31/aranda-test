import { useEffect, useState } from "react";
import CardRecipes from "../../components/CardRecipes";
import TitleBody from "../../components/TitleBody";
import { IRecipesObject } from "../../netwotk/interface";
import { getFastFood } from "../../netwotk/recipesService";
import "./styles.scss";

const FastFood = () => {
  const [fastFoodList, setFastFoodList] = useState<Array<IRecipesObject>>();

  const getData = async () => {
    return setFastFoodList(await getFastFood());
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <TitleBody title="Nuevas recetas" />
      <div className="fast--food">
        {fastFoodList &&
          fastFoodList?.map((item) => (
            <CardRecipes
              title={item.title.substring(1, 7)}
              subtitle={item.sourceName.substring(1, 7)}
              image={item.image}
              isFavorite={item.veryPopular}
              points={item.weightWatcherSmartPoints}
              key={1}
            />
          ))}
      </div>
    </>
  );
};

export default FastFood;
