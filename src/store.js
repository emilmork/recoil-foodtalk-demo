import { fetchRecipes, fetchFoodCategories, fetchFoodTypes } from "./data/ajax";

import { atom, selector } from "recoil";

// Local state
export const selectedCategoresState = atom({
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
export const filteredRecipesState = selector({
  key: "filteredRecepies",
  get: ({ get }) => {
    const recipes = get(recipesQuery);

    const selectedCategories = get(selectedCategoresState);
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
function hasCategory(recipe, selectedCategories) {
  if (selectedCategories.length === 0) return true;

  return selectedCategories.some((cat) => recipe.categories.includes(cat));
}

function hasType(recipe, selectedTypes) {
  if (selectedTypes.length === 0) return true;

  return selectedTypes.some((cat) => recipe.types.includes(cat));
}

function hasName(recipe, search) {
  if (search === "") return true;

  return recipe.name.toLowerCase().indexOf(search.toLowerCase()) >= 0;
}
