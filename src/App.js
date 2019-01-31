import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import LandingPage from './components/LandingPage';
import SearchPage from './components/SearchPage';
import Navbar from './components/Navbar';

const key = require('./config/keys');

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchResults: [],
      terms: '',
      start: 0,
      error: '',
    };
    this.onSearch = this.onSearch.bind(this);
  }

  // Handles search errors and fetches data
  onSearch(terms, start) {
    let filteredTerms = terms.replace(/\s/g, '+');

    if (!filteredTerms || filteredTerms.length === 0) {
      this.setState({ searchResults: [], error: 'You must submit a valid search.' });
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
          this.setState({ terms: terms, start: start, searchResults: data.items, error: '' });
        })
        .catch(err => {
          console.log(err);
          this.setState({ searchResults: [], error: 'You must submit a valid search.' });
        });
    }
  }

  render() {
    const { searchResults, terms, start, error } = this.state;

    return (
      <Router>
        <div className="app">
          <Route exact path="/" component={(props) =>
            <LandingPage
              onSearch={this.onSearch}
              error={error}
              history={props.history}
            />
          }/>
          <Route path="/search" component={(props) =>
            <div>
              <Navbar onSearch={this.onSearch} error={error} history={props.history} />
              <SearchPage
                books={searchResults}
                onSearch={this.onSearch}
                terms={terms}
                start={start}
              />
            </div>
          }/>
        </div>
      </Router>
    );
  }
}

export default App;
