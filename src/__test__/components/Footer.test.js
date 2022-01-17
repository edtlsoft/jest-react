import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import Footer from '../../components/Footer';
import { expect } from '@jest/globals';

describe('<Footer />', () => {
  const footer = mount(<Footer />);

  test('should be rendered', () => {
    expect(footer.length).toEqual(1);
  });

  test('should be render the title', () => {
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store Error');
  });
});

describe('Footer snapshot', () => {
  test('Validate UI', () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  });
});
