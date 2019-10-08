import React, { Component } from 'react';
import Axios from 'axios'
import logo from './logo.svg';
import './App.css';
import Header from './Components/Search';
import CardList from './Components/CardList';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
      users: [],
      followers: []
    }
  }

  componentDidMount() {
    Axios.get('https://api.github.com/users')
    .then(res => {
      console.log(res);
      this.setState({
        isLoaded: true,
        users: res.data
      });
    })
    .catch(error => {
      console.log(error)
    });

    Axios.get('https://api.github.com/users/followers')
    .then(res => {
      console.log(res);
      this.setState({
        isLoaded: true,
        followers: res.data
      });
    })
    .catch(error => {
      console.log(error)
    });
  }

  render() {
    return (
      <div className="App">
        <Header className="App-header">
          
        </Header>
        <CardList users={this.state.users} followers={this.state.followers}/>
      </div>
    );
  }
}
