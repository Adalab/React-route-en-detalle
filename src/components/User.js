import React, {Component} from "react";
import {Link} from 'react-router-dom';

class User extends Component {

  componentWillUnmount() {
    this.props.resetFilters();
  }

  render() {
    console.log(this.props.match.params);
    console.log(this.props.users);
    const {match, users, loading} = this.props;
    const {userId} = match.params;

    const user = users[userId];

    if (loading === true) {
      return <p>Loading...</p>;
    }

    return (
      <div className="detail">

        {user ? 
          <h2 className="detail__name">{`${user.name.first} ${user.name.last}`}</h2>
        : 
          <p>Chacho, no tenemos na.</p>
        }
        <p><Link to="/">Volver :)</Link></p>
      </div>
    );
  }
}

export default User;