Demo: [Book Search](https://frye-book-search.herokuapp.com/)

This application utilizes Google Books' API to allow a user to search for books containing a keyword. It will return a list of 10 matching books for the user to click on and view.

## Running this application

To run this application on your own system, first you will need your Google Books API keys. Inside the project, run:

### `cd src/config`

Open `keys_dev.js` and add your API key to the empty `secretKey` object.

Then go back into the client directory and run:

### `npm start`

This runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Opens up the Jest test runner and runs all tests.

## Extra Details
* This application was built using React and Bootstrap for the UI, and Jest for testing.
* For testing, I primarily utilized snapshots to ensure components were properly rendering. Besides rendering, receiving props and broken data were also tested.
* I used the `fetch()` method to return a promise containing JSON data from Google Books API.
