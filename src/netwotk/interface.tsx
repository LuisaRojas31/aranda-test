export interface IRecipesObject {
  id: number;
  title: string;
  image: string;
  weightWatcherSmartPoints: number;
  sourceName: string;
  vegetarian: boolean;
  dairyFree: boolean;
  veryPopular: boolean;
  glutenFree: boolean;
}

interface IRecipes {
  recipes: Array<IRecipesObject>;
}

export interface IResponse {
  data: IRecipes;
}
