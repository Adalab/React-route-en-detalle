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
      loading: true
    };
  }

  componentDidMount() {
    this.getUsers();
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
    const {users, loading} = this.state;
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <Home users={users} />} />
          <Route path="/user/:userId" render={routerProps => <User match={routerProps.match} loading={loading} users={users} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
