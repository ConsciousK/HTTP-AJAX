import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import FriendsList from './FriendsList';

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
      <h1>Hello CodeSandbox</h1>
      <FriendsList friends={this.state.listOfFriends} key={this.state.id} />

    </div>
    );
  }
}

export default App;
