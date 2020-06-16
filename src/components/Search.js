import React from "react";

import { recipeSearchState } from "../store";
import { useRecoilValue, useRecoilState } from "recoil";

export default () => {
  const [recipeSearch, setRecipeSearch] = useRecoilState(recipeSearchState);
  return (
    <div className="px-2">
      <input
        class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-sm py-2 px-4 block w-full appearance-none leading-normal"
        type="email"
        placeholder="Search for recipe.."
        value={recipeSearch}
        onChange={(e) => {
          setRecipeSearch(e.target.value);
        }}
      />
    </div>
  );
};
