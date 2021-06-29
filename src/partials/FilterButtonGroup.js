import React, { useEffect } from "react";
import FilterTabButton from "../partials/FilterTabButton";

export default function FilterButtonGroup({ activeTab, onFilterButtonClick }) {
  const filters = [
    {
      name: "instagram",
      label: "Instagram",
    },
    {
      name: "facebook",
      label: "Facebook",
    },
    {
      name: "twitter",
      label: "Twitter",
    },
    {
      name: "google-search",
      label: "Google Search",
    },
  ];

  const getRowsByCount = (n, arr) => {
    return arr.slice(0, n);
  };

  //console.log(getRowsByCount(2, filters));

  return (
    <div className="justify-start">
      {filters &&
        filters.map((filter, index) => {
          return (
            <FilterTabButton
              key={index}
              label={filter.label}
              name={filter.name}
              activeTab={activeTab}
              onClick={() => {
                onFilterButtonClick(filter.name);
              }}
            />
          );
        })}
    </div>
  );
}
