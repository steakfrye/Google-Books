import React, { Component } from 'react';

export class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ search: event.target.value });
  }

  // Submits search parameters up to parent <App />
  handleSubmit(event) {
    event.preventDefault();
    this.props.onSearch(this.state.search);
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <h1>Book Search</h1>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
            </li>
            <li className="nav-item">
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0" onSubmit={this.handleSubmit}>
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search Books"
              aria-label="Search"
              value={this.state.search}
              onChange={this.handleChange}
            />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
          {this.props.error ?
          <div className="invalid-feedback">
            <small>{this.props.error}</small>
          </div> :
          null}
        </div>
      </nav>
    );
  }
}

export default Search;
