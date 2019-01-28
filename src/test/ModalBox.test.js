import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { configure, mount } from 'enzyme';
import ModalBox from '../components/ModalBox';

configure({ adapter: new Adapter() });

describe('<ModalBox />', () => {
  const book = {
    id: 'bZ_JqLD6NGEC',
    volumeInfo: {
      title: 'Collaborative Quilting',
      description: 'A book about quilting.',
      authors: [
       'Freddy Moran',
       'Gwen Marston',
      ],
      publisher: 'Sterling Publishing Company, Inc.',
      imageLinks: { thumbnail: 'http://tinyurl.com/55' },
    },
  };
  const item = mount(<ModalBox book={book} />);

  it('handles props', () => {
    expect(item.prop('book')).toEqual(book);
  });

  it('renders data from props', () => {
    const tree = renderer
      .create(item)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('will not crash when given missing JSON data', () => {
    const emptyItem = mount(
      <ModalBox book={{ id: 'abc', volumeInfo: { title: 'Empty' } }} />
    );
    expect(emptyItem).toHaveLength(1);
  });
});
