import data from "./data";
import { Category, Recipe, RecipeType } from '../models';

// API placeholder
export const fetchFoodCategories = () =>
  new Promise<Category[]>((resolve) => {
    setTimeout(() => {
      resolve(data.categories);
    }, 1500);
  });

export const fetchFoodTypes = () =>
  new Promise<RecipeType[]>((resolve) => {
    setTimeout(() => {
      resolve(data.types);
    }, 2000);
  });

export const fetchRecipes = () =>
  new Promise<Recipe[]>((resolve) => {
    setTimeout(() => {
      resolve(data.recepies);
    }, 3000);
  });
