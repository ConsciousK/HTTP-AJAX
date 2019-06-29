import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import FriendsList from './FriendsList';
import AddFriendForm from './AddFriendForm';
import EditFriend from './EditFriend';
import Friend from './Friend'
class App extends Component {
    state = {
      listOfFriends: []
    }

  componentDidMount() {
    axios
    .get('http://localhost:5000/friends')
    .then(response => {
      this.setState({ 
          listOfFriends: response.data 
        })
    })

    .catch(err => {
       console.log('Error', err)
    })
  }

  updateFriends = (listOfFriends) => {
    this.setState({ listOfFriends })
  }

  render() {
      const { listOfFriends } = this.state
    return (
      <BrowserRouter>
        <div className="App">
          <h1>Friends List App</h1>
          <nav>
            <div>
              <Link to="/">Home</Link>
              <Link to="/friendslist">Friends List</Link>
              <Link to='/addfriend'>Add Friend</Link>
            </div>
          </nav>
          <Route exact path="/friendslist" render={(props) => <FriendsList {...props} friends={listOfFriends} />} />
          <Route exact path="/addfriend" render={(props) => <AddFriendForm {...props} updateFriends={this.updateFriends} />} />
          <Route exact path="/friend/:id" render={(props) => <Friend {...props} updateFriends={this.updateFriends} />} />
          <Route exact path="/edit/:id" render={(props) => <EditFriend {...props} updateFriends={this.updateFriends} />} />
        </div>
      </BrowserRouter>

    )
  }
}

export default App;
