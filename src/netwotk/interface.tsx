export interface IVegetarian {
  id: number;
  title: string;
  image: string;
  weightWatcherSmartPoints: number;
  sourceName: string;
  vegetarian: boolean;
}

interface IRecipes {
  recipes: Array<IVegetarian>;
}

export interface IVegetarianResponse {
  data: IRecipes;
}
