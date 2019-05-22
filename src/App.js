import React from 'react';
import {fetchUsers} from './services/users';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import User from './components/User';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      loading: true,
      queryName: '',
      queryAge: 0,
      queryGender: 'female'
    };
    this.handleNameFilter = this.handleNameFilter.bind(this);
    this.handleAgeFilter = this.handleAgeFilter.bind(this);
    this.handleGenderFilter = this.handleGenderFilter.bind(this);
    this.resetFilters = this.resetFilters.bind(this);
  }

  componentDidMount() {
    this.getUsers();
  }

  handleNameFilter(event) {
    const userQuery = event.currentTarget.value;

    this.setState({
      queryName: userQuery
    })
  }

  handleGenderFilter(event) {
    const userQuery = event.currentTarget.value;

    this.setState({
      queryGender: userQuery
    })
  }

  handleAgeFilter(event) {
    let userQuery = event.currentTarget.value;

    if (userQuery === '') {
      userQuery = 0;
    }
 
    this.setState({
      queryAge: parseInt(userQuery)
    })
  }

  resetFilters() {
    this.setState({
      queryName: '',
      queryAge: 0,
      queryGender: 'all'
    });
  }

  getUsers() {
    fetchUsers()
      .then(data => {

        const newUsers = data.results.map((item, index) => {
          return {...item, id: index};
        });

        this.setState({
          users: newUsers,
          loading: false
        });
      });
  }

  render() {
    const {users, loading, queryName, queryAge, queryGender} = this.state;
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <Home 
            users={users} 
            queryName={queryName}
            filterName={this.handleNameFilter}
            queryAge={queryAge}
            filterAge={this.handleAgeFilter}
            queryGender={queryGender}
            filterGender={this.handleGenderFilter}

            />} />
          <Route path="/user/:userId" render={routerProps => <User 
            match={routerProps.match} 
            loading={loading} 
            users={users} 
            resetFilters={this.resetFilters}
            />} />
        </Switch>
      </div>
    );
  }
}

export default App;
