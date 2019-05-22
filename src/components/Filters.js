import React, {Component} from "react";

class Filters extends Component {
  render() {
    const {filterName, queryName} = this.props;
    return (
      <div className="filters">
        <div className="filter">
          <label htmlFor="name">Filtra por nombre</label>
          <input type="text" id="name" onChange={filterName} value={queryName} />
        </div>
      </div>
    );
  }
}

export default Filters;