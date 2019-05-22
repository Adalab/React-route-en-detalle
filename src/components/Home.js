import React, {Component} from "react";
import {Link} from 'react-router-dom';
import Filters from './Filters';

class Home extends Component {
  render() {
    const {users, queryName, filterName} = this.props;
    return (
      <div className="home">
        <Filters
          filterName={filterName} 
          queryName={queryName}
        />

        <ul className="users">
          {users
            .filter(item => item.name.first.includes(queryName) || item.name.last.includes(queryName))
            .map(item => {
              return (
                <li className="user" key={item.id}>
                  <Link to={`/user/${item.id}`}>
                    <div className="card">
                      <img src={item.picture.medium} alt={`${item.name.first} ${item.name.last}`} className="card__img"/>
                      <h2 className="card__name">{`${item.name.first} ${item.name.last}`}</h2>
                      <ul className="details">
                        <li className="details__age">{item.dob.age}</li>
                        <li className="details__genre">{item.gender}</li>
                      </ul>
                    </div>
                  </Link>
                </li>
              );
          })}
        </ul>
      </div>
    );
  }
}

export default Home;