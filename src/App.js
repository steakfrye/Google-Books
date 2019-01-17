import React, { Component } from 'react';
import './App.css';

import Search from './components/Search';
import Table from './components/Table';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search />
        <Table />
      </div>
    );
  }
}

export default App;
