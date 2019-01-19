import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { configure, mount } from 'enzyme';
import App from '../App';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Book search', () => {
  const app = mount(<App />);

  it('handles no input', () => {
    app.onSearch('');
    expect(app.state.error).toBe("You must submit a valid search.");
  });

  it('handles symbols', () => {
    app.onSearch('@');
    expect(app.state.searchResults.length).not.toBe(0);
  });

  it('handles correct input', () => {
    app.onSearch('pizza');
    expect(app.state.searchResults.length).not.toBe(0);
  });
});
