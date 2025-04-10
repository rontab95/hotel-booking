import React, { useState } from "react";
import { filterOptions } from "../data.js";

const FiltersList = (props) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    const selectedKey = event.target.value;

    if (selectedKey && !props.selectedFilters.includes(selectedKey)) {
      props.toggleFilter(selectedKey);

      // Reset the dropdown after selection
      setTimeout(() => {
        setSelectedValue("");
      }, 0);
    }
  };

  return (
    <div className="filters-dropdown">
      {/* Filter Label and Dropdown */}
      <div className="filters-group">
        <label htmlFor="filter-select" className="filters-label">
          <strong>Filter by:</strong>
        </label>
        <select
          id="filter-select"
          value={selectedValue}
          onChange={handleChange}
          className="filters-select"
        >
          <option value="" disabled>
            Choose a filter
          </option>
          {filterOptions.map((filter) => (
            <option
              key={filter.key}
              value={filter.key}
              disabled={props.selectedFilters.includes(filter.key)}
            >
              {filter.display}
            </option>
          ))}
        </select>
      </div>

      {/* Selected Filters Display */}
      {props.selectedFilters.length > 0 && (
        <div className="selected-filters">
          <strong>Selected Filters:</strong>
          <div className="selected-filters__tags">
            {props.selectedFilters.map((key) => {
              const label =
                filterOptions.find((f) => f.key === key)?.display || key;
              return (
                <button
                  key={key}
                  className="filter-tag"
                  onClick={() => props.toggleFilter(key)}
                >
                  ❌ {label}
                </button>
              );
            })}
          </div>

          {/* Clear All Button */}
          <button
            className="clear-filters-btn"
            onClick={props.clearAllFilters}
          >
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default FiltersList;
