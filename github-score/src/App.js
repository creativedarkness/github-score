import React, { Component } from 'react';
import GitHubScore from './components/GitHubScore/GitHubScore';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
      <GitHubScore />
      </div>
    );
  }
}

export default App;
