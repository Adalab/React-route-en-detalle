import React, {Component} from "react";

class Filters extends Component {
  render() {
    const {filterName, queryName, filterAge, queryAge} = this.props;
    return (
      <div className="filters">
        <div className="filter">
          <label htmlFor="name">Filtra por nombre</label>
          <input type="text" id="name" onChange={filterName} value={queryName} />
        </div>

        <div className="filter">
          <label htmlFor="age">Filtra por Edad</label>
          <input type="number" id="age" onChange={filterAge} value={queryAge} />
        </div>
      </div>
    );
  }
}

export default Filters;