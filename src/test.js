import { fetchRecipes, fetchFoodCategories, fetchFoodTypes } from "./data/ajax";

import { atom, selector } from "recoil";

// Local state
export const selectedCategoriesState = atom({
  key: "selectedCategores",
  default: [],
});

export const selectedTypesState = atom({
  key: "selectedTypes",
  default: [],
});

export const recipeSearchState = atom({
  key: "search",
  default: "",
});

// Queries
export const recipeCategoriesQuery = selector({
  key: "categoriesQuery",
  default: [],
  get: () => fetchFoodCategories(),
});

export const recipeTypesQuery = selector({
  key: "typeQuery",
  default: [],
  get: () => fetchFoodTypes(),
});

const recipesQuery = selector({
  key: "recipesQuery",
  get: () => fetchRecipes(),
});

// Derived state
export const filterSummary = selector({
  key: "filterSummaryKey",
  get: ({ get }) => {
    return {
      selectedCategories: get(selectedCategoriesState),
      selectedTypes: get(selectedTypesState),
      search: get(recipeSearchState),
    };
  },
});

export const filteredRecipesState = selector({
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
