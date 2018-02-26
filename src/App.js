import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Idea from './components/Idea';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" onClick={() => window.location.reload()} />
          <h1 className="App-title">アイデア生成支援ツール</h1>
        </header>

        <p>
          <Idea />
        </p>
      </div>
    );
  }
}

export default App;
