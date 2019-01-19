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

describe('<App />', () => {
  const app = mount(<App />);

  it('displays landing page', () => {
    const tree = renderer
      .create(app)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})
