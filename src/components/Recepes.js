import React from "react";

import { filteredRecipesState } from "../store";
import { useRecoilValue } from "recoil";

export default () => {
  const filteredRecipies = useRecoilValue(filteredRecipesState);
  return (
    <div class="flex flex-wrap">
      {filteredRecipies.map((recipe) => (
        <div key={recipe.name} class="md:w-1/2 cursor-pointer">
          <div class="border-2 border-gray-200 m-2 p-4">
            <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
              {recipe.name}
            </h2>
            <Reviews />
            <p class="leading-relaxed text-base mb-4">{recipe.desc}</p>
            <div className="flex justify-between">
              <span className="text-sm text-yellow-800">
                {recipe.categories.join(", ")}
              </span>
              <span className="text-sm text-indigo-800">
                {recipe.types.join(", ")}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

function Reviews() {
  return (
    <div class="flex mb-4">
      <span class="flex items-center">
        <svg
          fill="currentColor"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          class="w-4 h-4 text-green-500"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
        </svg>
        <svg
          fill="currentColor"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          class="w-4 h-4 text-green-500"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
        </svg>
        <svg
          fill="currentColor"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          class="w-4 h-4 text-green-500"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
        </svg>
        <svg
          fill="currentColor"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          class="w-4 h-4 text-green-500"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
        </svg>
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          class="w-4 h-4 text-green-500"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
        </svg>
      </span>
    </div>
  );
}
