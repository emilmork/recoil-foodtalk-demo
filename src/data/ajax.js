import data from "./data";

export const fetchFoodCategories = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(data.categories);
    }, 1500);
  });

export const fetchFoodTypes = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(data.types);
    }, 2000);
  });

export const fetchRecipes = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(data.recepies);
    }, 3000);
  });
