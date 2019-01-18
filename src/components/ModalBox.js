import React, { Component } from 'react';

export class DetailBox extends Component {

  render() {
    const { book } = this.props;

    return (
      <div>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {book.volumeInfo.title}, {book.volumeInfo.authors.join(", ")} | {book.volumeInfo.publishedDate}
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="image col-md-3">
                    <img
                      src={book.volumeInfo.imageLinks.thumbnail}
                      alt={book.volumeInfo.title}
                    />
                  </div>
                  <div className="col-md-9">
                    <p>{book.volumeInfo.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailBox;
