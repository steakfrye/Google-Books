import React, { Component } from 'react';
import Search from './Search';

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <h1>Book Search</h1>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
            </li>
            <li className="nav-item">
            </li>
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
