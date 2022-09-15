import axios from "axios";
import { IVegetarianResponse } from "./interface";

export const getVegetariansRecipes = async () => {
  const { REACT_APP_API_KEY, REACT_APP_API_URL_BASE } = process.env;
  try {
    const response: IVegetarianResponse = await axios.get(
      `${REACT_APP_API_URL_BASE}recipes/random?number=4&tags=vegetarian&apiKey=${REACT_APP_API_KEY}`
    );
    return response.data.recipes;
  } catch (ex) {
    console.log("err", ex);
  }
};
