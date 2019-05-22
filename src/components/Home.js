import React, {Component} from "react";
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class Home extends Component {
  render() {
    const {users, filterName, filterAge, filterTinder} = this.props;
    return (
      <ul className="users">
        {users
          .filter(item => item.name.first.includes(filterName) || item.name.last.includes(filterName))
          .filter(item => item.dob.age >= filterAge)
          .filter(item => filterTinder === true ? item.dob.age >= 45 : item)
          .map(item => {
          return (
            <li className="user" key={item.id}>
              <Link to={`/user/${item.id}`}>
                <div className="card">
                  <img src={item.picture.large} alt={item.name.first + ' ' + item.name.last} className="card__img"/>
                  <h2 className="card__name">{`${item.name.first} ${item.name.last}`}</h2>
                  <small className="card__age">{item.dob.age}</small>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

Home.propTypes = {
  filterAge: PropTypes.number
}

export default Home;