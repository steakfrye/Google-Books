import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import LandingPage from './components/LandingPage';
import Table from './components/Table';
import Navbar from './components/Navbar';
import NoResults from './components/NoResults';

const key = require('./config/keys');

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchResults: [],
      terms: '',
      start: 0,
      redirect: false,
      error: '',
    };
    this.onSearch = this.onSearch.bind(this);
  }

  // Handles search errors and fetches data
  onSearch(terms, start) {
    let filteredTerms = terms.replace(/\s/g, '+');
    this.setState({ terms: terms, start: start });

    if (!filteredTerms || filteredTerms.length === 0) {
      this.setState({ error: 'You must submit a valid search.' });
    } else {
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${filteredTerms}&startIndex=${start}&key=${key.secretKey}`)
        .then(res => {
            if (!res.ok) {
              throw Error(res.statusText);
            }

            return res.json();
          })
        .then(data => {
          // Store data and redirect
          console.log(data);
          this.setState({ searchResults: data.items, redirect: true, error: '' });
        })
        .catch(err => {
          console.log(err);
          this.setState({ error: 'You must submit a valid search.' });
        });
    }
  }

  render() {
    const { searchResults, terms, start, redirect, error } = this.state;

    return (
      <Router>
        <div className="app">
          <Route exact path="/" component={() =>
            <LandingPage onSearch={this.onSearch} error={error} redirect={redirect} />
          }/>
          <Route path="/search" component={() =>
            <div>
              <Navbar onSearch={this.onSearch} error={error} />
              {
                (!searchResults || searchResults.length === 0) ?
                  <NoResults /> :
                <Table
                  books={searchResults}
                  onSearch={this.onSearch}
                  terms={terms}
                  start={start}
                />
              }
            </div>
          }/>
        </div>
      </Router>
    );
  }
}

export default App;
