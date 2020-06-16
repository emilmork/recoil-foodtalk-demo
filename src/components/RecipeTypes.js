import React from "react";
import classnames from "classnames";

import { recipeTypesQuery, selectedTypesState } from "../store";
import { useRecoilValue, useRecoilState } from "recoil";

export default () => {
  const receipeTypes = useRecoilValue(recipeTypesQuery);
  const [selectedTypes, setSelectedTypes] = useRecoilState(selectedTypesState);

  const updateSelectedType = (type) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter((c) => c !== type));
    } else {
      setSelectedTypes([type, ...selectedTypes]);
    }
  };
  return (
    <nav className="list-none -mb-1">
      {receipeTypes.map((type) => {
        const isSelected = selectedTypes.includes(type);

        return (
          <li key={type} onClick={() => updateSelectedType(type)}>
            <label
              className={classnames(
                "text-gray-600 hover:text-gray-800 cursor-pointer",
                {
                  "text-green-600": isSelected,
                  "hover:text-green-800": isSelected,
                }
              )}
            >
              {type}
            </label>
          </li>
        );
      })}
    </nav>
  );
};
