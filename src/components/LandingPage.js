import React, { Component } from 'react';
import Search from './Search';

// Initial search page
export class LandingPage extends Component {
  render() {
    return (
      <div className="container pad">
        <div className="row align-items-center">
          <div className="col-md-12 text-center">
            <h1 className="display-3 mb-4">Book Search</h1>
            <hr/>
            <h3>Use the search to find a list of relevant books.</h3>
            <Search
              className="form-control col-sm-4"
              formClass="form-group row justify-content-center"
              onSearch={this.props.onSearch}
              error={this.props.error}
              history={this.props.history}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
