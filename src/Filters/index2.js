import React from "react";
import { filterOptions } from "../data.js";

const FiltersList = (props) => {
  const handleChange = (event) => {
    const selectedKey = event.target.value;
    props.toggleFilter(selectedKey);
  };

  return (
    <div className="filters-dropdown">
      <label htmlFor="filter-select"><strong>Filter by:</strong></label>
      <select id="filter-select" onChange={handleChange} value="">
        <option value="" disabled>Choose a filter</option>
        {filterOptions.map((filter) => (
          <option key={filter.key} value={filter.key}>
            {filter.display}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FiltersList;
