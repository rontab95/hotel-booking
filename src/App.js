import React, { Component } from "react";
import Hotels from "./Hotels";


class App extends Component {
  state = { selectedFilters: [] };
  toggleFilter = (clickedFilterKey) => {
    let newFilters;
    // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes to see how the .includes array method works
    const alreadySelected = this.state.selectedFilters.includes(
      clickedFilterKey
    );
    if (alreadySelected) {
      // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter to see how the .filter array method works
      newFilters = this.state.selectedFilters.filter(
        (selectedFilter) => selectedFilter !== clickedFilterKey
      );
    } else {
      // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat to see how the .concat array method works
      newFilters = this.state.selectedFilters.concat(clickedFilterKey);
    }
    this.setState({ selectedFilters: newFilters });
  };

  clearAllFilters = () => {
    this.setState({ selectedFilters: [] });
  };
  
  render() {
    return (
      <div className="App">

  <Hotels
  selectedFilters={this.state.selectedFilters}
  toggleFilter={this.toggleFilter}
  clearAllFilters={this.clearAllFilters}
/>

</div>

    );
  }
}

export default App;