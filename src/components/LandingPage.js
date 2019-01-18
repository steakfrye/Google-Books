import React, { Component } from 'react';

export class LandingPage extends Component {
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

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSearch(this.state.search);
  }

  render() {
    return (
      <div className="container pad">
        <div className="row align-items-center">
          <div className="col-md-12 text-center">
            <h1 className="display-3 mb-4">Book Search</h1>
            <hr/>
            <h3>Use the search to find a list of relevant books.</h3>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group row justify-content-center">
                <input
                className="form-control col-sm-4"
                type="search"
                placeholder="Search Books"
                aria-label="Search"
                value={this.state.search}
                onChange={this.handleChange}
                />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
