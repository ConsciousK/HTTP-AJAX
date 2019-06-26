import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import FriendsList from './FriendsList';
import AddFriendForm from './AddFriendForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      listOfFriends: []
    };
  }

  componentDidMount() {
    axios
    .get('http://localhost:5000/friends')
    .then(response => {
      this.setState({ listOfFriends: response.data });
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
      <h1>Friends List App</h1>
      <FriendsList friends={this.state.listOfFriends} />
      <AddFriendForm />
    </div>
    );
  }
}

export default App;
