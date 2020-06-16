import React, { Suspense } from "react";
import Header from "./components/Header";
import RecipeCategories from "./components/RecipeCategories";
import RecipeTypes from "./components/RecipeTypes";
import Recepes from "./components/Recepes";
import Search from "./components/Search";

export default () => {
  return (
    <div className="text-gray-700 body-font">
      <Header />
      <div class="px-5 py-24 mx-auto flex flex-col">
        <div class="lg:w-4/6 mx-auto">
          <div class="flex flex-col sm:flex-row mt-10">
            <div>
              <Search />
              <div class="text-center sm:pr-8 sm:py-8">
                <h2 class="title-font font-medium text-gray-800 tracking-widest text-sm mb-3">
                  CATEGORY
                </h2>
                <Suspense fallback={<span>...</span>}>
                  <RecipeCategories />
                </Suspense>
              </div>
              <div class="text-center sm:pr-8 sm:py-8">
                <h2 class="title-font font-medium text-gray-800 tracking-widest text-sm mb-3">
                  TYPE
                </h2>
                <Suspense fallback={<span>...</span>}>
                  <RecipeTypes />
                </Suspense>
              </div>
            </div>
            <div class="sm:w-2/3 sm:pl-8 sm:border-l border-gray-300 sm:border-t-0 border-t">
              <Suspense fallback={<span>Loading recipes...</span>}>
                <Recepes />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
