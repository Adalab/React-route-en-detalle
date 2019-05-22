import React, {Component} from "react";

class Filters extends Component {
  render() {
    const {filterName, queryName, filterAge, queryAge, filterGender} = this.props;
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

        <div className="filter">
          <label htmlFor="gender">Filtra por género</label>
          <select id="gender" onChange={filterGender}>
            <option value="all">Todos</option>
            <option value="female">Solo chicas</option>
            <option value="male">Solo chicos</option>
          </select>
        </div>
      </div>
    );
  }
}

export default Filters;