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
      <div>
        <form className={this.props.formClass} onSubmit={this.handleSubmit}>
          <input
            className={this.props.className}
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
    );
  }
}

export default Search;
