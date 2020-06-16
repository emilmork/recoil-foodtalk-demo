import React from "react";

import {
  selectedCategoriesState,
  selectedTypesState,
  recipeSearchState,
} from "../store";
import { useRecoilState } from "recoil";

export default () => {
  const [selectedCategories, setSelectedCategories] = useRecoilState(
    selectedCategoriesState
  );
  const [selectedTypes, setSelectedTypes] = useRecoilState(selectedTypesState);
  const [search, setSearch] = useRecoilState(recipeSearchState);

  const anyFilterActive =
    selectedCategories.length > 0 ||
    selectedTypes.length > 0 ||
    search.length > 0;

  const clearFilter = () => {
    setSelectedCategories([]);
    setSelectedTypes([]);
    setSearch("");
  };

  return (
    <div className="flex w-full h-6">
      {selectedCategories.length > 0 && (
        <div className="mr-4">
          <span className="text-xs text-bold text-green-600">CATEGORIES </span>
          <span className="text-sm text-green-800 mr-2">
            {selectedCategories.slice().sort().join(", ")}
          </span>
        </div>
      )}
      {selectedTypes.length > 0 && (
        <div className="mr-4">
          <span className="text-xs text-bold text-green-600">TYPES </span>
          <span className="text-sm text-green-800 mr-2">
            {selectedTypes.slice().sort().join(", ")}
          </span>
        </div>
      )}
      {search.length > 0 && (
        <div className="mr-4">
          <span className="text-xs text-bold text-green-600">SEARCH </span>
          <span className="text-sm text-green-800 mr-2">{search}</span>
        </div>
      )}
      {anyFilterActive && (
        <button
          onClick={clearFilter}
          className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0"
        >
          clear filter
        </button>
      )}
    </div>
  );
};
