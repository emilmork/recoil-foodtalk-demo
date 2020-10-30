import { fetchRecipes, fetchFoodCategories, fetchFoodTypes } from "./data/ajax";
import { Category, Recipe, RecipeType, RecipeFilter } from './models';

import { atom, selector } from "recoil";

// Local state
export const selectedCategoriesState = atom<Category[]>({
  key: "selectedCategores",
  default: [],
});

export const selectedTypesState = atom<RecipeType[]>({
  key: "selectedTypes",
  default: [],
});

export const recipeSearchState = atom<string>({
  key: "search",
  default: "",
});

// Queries
export const recipeCategoriesQuery = selector<Category[]>({
  key: "categoriesQuery",
  get: () => fetchFoodCategories(),
});

export const recipeTypesQuery = selector<RecipeType[]>({
  key: "typeQuery",
  get: () => fetchFoodTypes(),
});

const recipesQuery = selector<Recipe[]>({
  key: "recipesQuery",
  get: () => fetchRecipes(),
});

// Derived state
export const filterSummary = selector<RecipeFilter>({
  key: "filterSummary",
  get: async ({ get }) => {
    return {
      selectedCategories: get(selectedCategoriesState),
      selectedTypes: get(selectedTypesState),
      search: get(recipeSearchState),
    };
  },
});
export const filteredRecipesState = selector<Recipe[]>({
  key: "filteredRecepies",
  get: ({ get }) => {
    const recipes = get(recipesQuery);

    const selectedCategories = get(selectedCategoriesState);
    const selectedTypes = get(selectedTypesState);
    const search = get(recipeSearchState);

    return recipes.filter((recipe) => {
      return (
        hasCategory(recipe, selectedCategories) &&
        hasType(recipe, selectedTypes) &&
        hasName(recipe, search)
      );
    });
  },
});

// Utils
function hasCategory(recipe: Recipe, selectedCategories: Category[]): boolean {
  if (selectedCategories.length === 0) return true;

  return selectedCategories.some((cat) => recipe.categories.includes(cat));
}

function hasType(recipe: Recipe, selectedTypes: RecipeType[]): boolean {
  if (selectedTypes.length === 0) return true;

  return selectedTypes.some((cat) => recipe.types.includes(cat));
}

function hasName(recipe: Recipe, search: string): boolean {
  if (search === "") return true;

  return recipe.name.toLowerCase().indexOf(search.toLowerCase()) >= 0;
}
