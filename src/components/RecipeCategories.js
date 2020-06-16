import React from "react";
import classnames from "classnames";

import { recipeCategoriesQuery, selectedCategoresState } from "../store";
import { useRecoilValue, useRecoilState } from "recoil";

export default () => {
  const categories = useRecoilValue(recipeCategoriesQuery);
  const [selectedCategories, setSelectedCategories] = useRecoilState(
    selectedCategoresState
  );

  const updateSelectedCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([category, ...selectedCategories]);
    }
  };

  return (
    <nav class="list-none -mb-1">
      {categories.map((category) => {
        const isSelected = selectedCategories.includes(category);
        return (
          <li key={category} onClick={() => updateSelectedCategory(category)}>
            <label
              className={classnames(
                "text-gray-600 hover:text-gray-800 cursor-pointer",
                {
                  "text-green-600": isSelected,
                  "hover:text-green-800": isSelected,
                }
              )}
            >
              {category}
            </label>
          </li>
        );
      })}
    </nav>
  );
};
