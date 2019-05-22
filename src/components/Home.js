import React, {Component} from "react";
import {Link} from 'react-router-dom';
import Filters from './Filters';
import PropTypes from 'prop-types';

class Home extends Component {
  render() {
    const {users, queryName, filterName, queryAge, filterAge, queryGender, filterGender} = this.props;
    return (
      <div className="home">
        <Filters
          filterName={filterName} 
          queryName={queryName}
          filterAge={filterAge}
          queryAge={queryAge}
          filterGender={filterGender}
        />

        <ul className="users">
          {users
            .filter(item => item.name.first.toLowerCase().includes(queryName.toLowerCase()) || item.name.last.toLowerCase().includes(queryName.toLowerCase()))
            .filter(item => item.dob.age >= queryAge)
            .filter(item => {
              if (queryGender === 'all') {
                return item;
              } else if (queryGender === 'female') {
                return item.gender === 'female';
              } else {
                return item.gender === 'male';
              }
            })
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

Home.propTypes = {
  queryAge: PropTypes.number
}

export default Home;