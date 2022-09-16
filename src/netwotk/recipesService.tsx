import axios from "axios";
import { IResponse } from "./interface";

export const getVegetariansRecipes = async () => {
  const { REACT_APP_API_KEY, REACT_APP_API_URL_BASE } = process.env;
  try {
    const response: IResponse = await axios.get(
      `${REACT_APP_API_URL_BASE}recipes/random?number=4&tags=vegetarian&apiKey=${REACT_APP_API_KEY}`
    );
    return response.data.recipes;
  } catch (ex) {
    console.log("err", ex);
  }
};

export const getMainRecipes = async () => {
  const { REACT_APP_API_KEY, REACT_APP_API_URL_BASE } = process.env;
  try {
    const response: IResponse = await axios.get(
      `${REACT_APP_API_URL_BASE}recipes/random?number=4&tags=potatoes&apiKey=${REACT_APP_API_KEY}`
    );
    return response.data.recipes;
  } catch (ex) {
    console.log("err", ex);
  }
};

export const getCake = async () => {
  const { REACT_APP_API_KEY, REACT_APP_API_URL_BASE } = process.env;
  try {
    const response: IResponse = await axios.get(
      `${REACT_APP_API_URL_BASE}recipes/random?number=4&tags=cake&apiKey=${REACT_APP_API_KEY}`
    );
    return response.data.recipes;
  } catch (ex) {
    console.log("err", ex);
  }
};

export const getFastFood = async () => {
  const { REACT_APP_API_KEY, REACT_APP_API_URL_BASE } = process.env;
  try {
    const response: IResponse = await axios.get(
      `${REACT_APP_API_URL_BASE}recipes/random?number=4&tags=burger&apiKey=${REACT_APP_API_KEY}`
    );
    return response.data.recipes;
  } catch (ex) {
    console.log("err", ex);
  }
};

export const getKids = async () => {
  const { REACT_APP_API_KEY, REACT_APP_API_URL_BASE } = process.env;
  try {
    const response: IResponse = await axios.get(
      `${REACT_APP_API_URL_BASE}recipes/random?number=4&tags=icecream&apiKey=${REACT_APP_API_KEY}`
    );
    return response.data.recipes;
  } catch (ex) {
    console.log("err", ex);
  }
};

export const getSoups = async () => {
  const { REACT_APP_API_KEY, REACT_APP_API_URL_BASE } = process.env;
  try {
    const response: IResponse = await axios.get(
      `${REACT_APP_API_URL_BASE}recipes/random?number=4&tags=soups&apiKey=${REACT_APP_API_KEY}`
    );
    return response.data.recipes;
  } catch (ex) {
    console.log("err", ex);
  }
};
