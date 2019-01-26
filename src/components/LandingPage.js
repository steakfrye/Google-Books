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
              onSearch={this.props.onSearch}
              error={this.props.error}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;

// <form onSubmit={this.handleSubmit}>
//   <div className="form-group row justify-content-center">
//     <input
//     className="form-control col-sm-4"
//     type="search"
//     placeholder="Search Books"
//     aria-label="Search"
//     value={this.state.search}
//     onChange={this.handleChange}
//     />
//     <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
//       Search
//     </button>
//   </div>
// </form>
// {this.props.error ?
// <div className="invalid-feedback">
//   <small>{this.props.error}</small>
// </div> :
// null}
// </div>
