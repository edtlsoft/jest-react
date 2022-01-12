import React from 'react';
import { mount } from 'enzyme';
import Footer from '../../components/Footer';

describe('Testing footer', () => {
  test('should be rendered', () => {
    const footer = mount(<Footer />);
    expect(footer.length).toEqual(1);
  });
});
