import { useEffect, useState } from "react";
import CardRecipes from "../../components/CardRecipes";
import TitleBody from "../../components/TitleBody";
import { IRecipesObject } from "../../netwotk/interface";
import { getCake } from "../../netwotk/recipesService";
import "./styles.scss";

const Cake = () => {
  const [cakeList, setCakeList] = useState<Array<IRecipesObject>>();

  const getData = async () => {
    return setCakeList(await getCake());
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <TitleBody title="Nuevas recetas" />
      <div className="cake">
        {cakeList &&
          cakeList?.map((item) => (
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

export default Cake;
