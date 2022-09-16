import { useEffect, useState } from "react";
import CardRecipes from "../../components/CardRecipes";
import TitleBody from "../../components/TitleBody";
import { IRecipesObject } from "../../netwotk/interface";
import { getSoups } from "../../netwotk/recipesService";
import "./styles.scss";

const Soups = () => {
  const [soupsList, setSoupsList] = useState<Array<IRecipesObject>>();

  const getData = async () => {
    return setSoupsList(await getSoups());
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <TitleBody title="Nuevas recetas" />
      <div className="soups">
        {soupsList &&
          soupsList?.map((item) => (
            <CardRecipes
              title={item.title.substring(1, 7)}
              subtitle={item.sourceName.substring(1, 7)}
              image={item.image}
              isFavorite={item.glutenFree}
              points={item.weightWatcherSmartPoints}
              key={1}
            />
          ))}
      </div>
    </>
  );
};

export default Soups;
