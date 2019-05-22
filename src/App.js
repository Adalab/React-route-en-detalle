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
      filterName: '',
      filterAge: 0,
      filterTinder: false
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAgeChange = this.handleAgeChange.bind(this);
    this.resetFilters = this.resetFilters.bind(this);
    this.handleTinderChange = this.handleTinderChange.bind(this);
  }

  componentDidMount() {
    this.getUsers();
  }

  handleNameChange(event) {
    const valueName = event.currentTarget.value;
    this.setState({
      filterName: valueName
    });
  }

  handleTinderChange(event) {
    const valueName = event.currentTarget.checked;
    this.setState({
      filterTinder: valueName
    });
  }

  handleAgeChange(event) {
    let valueAge = event.currentTarget.value;
    
    if (valueAge === '') {
      valueAge = 0;
    }

    this.setState({
      filterAge: parseInt(valueAge)
    });
  }

  resetFilters() {
    this.setState({
      filterName: ''
    })
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
    const {users, loading, filterName, filterAge, filterTinder} = this.state;
    return (
      <div className="App">
        
        <div className="filters">

          <div className="filters__row">
            <label htmlFor="name">Filtra por nombre</label>
            <input id="name" type="text" onChange={this.handleNameChange} value={filterName}/>
          </div>

          <div className="filters__row">
            <label htmlFor="age">Filtra por edad</label>
            <input id="age" type="number" onChange={this.handleAgeChange} />
          </div>

          <div className="filters__row">
            <label htmlFor="tinder">
              <input id="tinder" type="checkbox" onChange={this.handleTinderChange} /> Solo mayores de 45
            </label>
          </div>

        </div>

        <Switch>
          <Route exact path="/" render={() => <Home
            users={users} 
            filterName={filterName} 
            filterAge={filterAge}
            filterTinder={filterTinder}
            />} />
          <Route path="/user/:userId" render={routerProps => <User resetFilters={this.resetFilters} match={routerProps.match} loading={loading} users={users} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
