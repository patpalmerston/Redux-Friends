import React, { Component } from 'react';
import LogInPage from './components/LogInPage';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>I am here</h1>
          <LogInPage />
        </header>
      </div>
    );
  }
}

export default App;
