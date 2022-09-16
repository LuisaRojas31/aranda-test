import { useEffect, useState } from "react";
import CardRecipes from "../../components/CardRecipes";
import TitleBody from "../../components/TitleBody";
import { IRecipesObject } from "../../netwotk/interface";
import { getMainRecipes } from "../../netwotk/recipesService";
import "./styles.scss";

const MainRecipes = () => {
  const [recipesList, setRecipesList] = useState<Array<IRecipesObject>>();

  const getData = async () => {
    return setRecipesList(await getMainRecipes());
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <TitleBody title="Nuevas recetas" />
      <div className="main-recipes">
        {recipesList &&
          recipesList?.map((item) => (
            <CardRecipes
              title={item.title.substring(1, 7)}
              subtitle={item.sourceName.substring(1, 7)}
              image={item.image}
              isFavorite={item.dairyFree}
              points={item.weightWatcherSmartPoints}
              key={1}
            />
          ))}
      </div>
    </>
  );
};

export default MainRecipes;
