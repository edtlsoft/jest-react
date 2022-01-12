import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/providerMock';
import Header from '../../components/Header';
import { create } from 'react-test-renderer';

describe('<Header />', () => {
  // shallow --> Solo necesitas algo particular del componente.
  const headerShallow = shallow(
    <ProviderMock>
      <Header />
    </ProviderMock>
  );

  // mount --> Cuando necesitas el DOM
  const headerMount = mount(
    <ProviderMock>
      <Header />
    </ProviderMock>
  );

  test('should be render of header', () => {
    expect(headerShallow.length).toEqual(1);
  });

  test('should be render of the header title', () => {
    expect(headerMount.find('.Header-title').text()).toBe('Platzi Store');
  });
});

describe('Header snapshot', () => {
  test('Validate Header UI', () => {
    const header = create(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );
    expect(header.toJSON()).toMatchSnapshot();
  });
});
