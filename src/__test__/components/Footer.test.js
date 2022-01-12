import React from 'react';
import { mount } from 'enzyme';
import Footer from '../../components/Footer';

describe('<Footer />', () => {
  const footer = mount(<Footer />);

  test('should be rendered', () => {
    expect(footer.length).toEqual(1);
  });

  test('should be render the title', () => {
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store');
  });
});
