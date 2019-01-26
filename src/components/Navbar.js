import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          Book Search
        </Link>
          <ul className="navbar-nav mr-auto">
          </ul>
          <Search
            className="form-control mr-sm-2"
            formClass="form-inline my-2 my-lg-0"
            onSearch={this.props.onSearch}
            error={this.props.error}
          />
      </nav>
    );
  }
}

export default Navbar;
