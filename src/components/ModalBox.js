import React, { Component } from 'react';

import { evaluate, evaluateImage } from '../utils/evaluate';

// Displays book info when clicked
export class DetailBox extends Component {

  render() {
    const book = this.props.book.volumeInfo;

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
                  {book.title}, {evaluate(book.authors, 'authors')}
                  | {evaluate(book.title, 'title')}
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
                      src={evaluateImage(book.imageLinks)}
                      alt={book.title}
                    />
                    <p className="font-weight-bold">
                      Genre: {evaluate(book.categories, 'genre')}
                    </p>
                    {book.ratingsCount > 0 ?
                      <p>Rating: {book.averageRating}/5</p> :
                      <p>No ratings yet.</p>
                    }
                  </div>
                  <div className="col-md-9">
                    <p>{evaluate(book.description, 'description')}</p>
                  </div>
                  <a href={book.infoLink}>View in Google Play store.</a>
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
