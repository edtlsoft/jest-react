import reducer from '../../reducers';
import productMock from '../../__mocks__/productMock';

describe('Reducers', () => {
  test('Should be return the initial status', () => {
    expect(reducer({}, '')).toEqual({});
  });

  test('Add to cart', () => {
    const initialState = {
      cart: [],
    };
    const payload = productMock;
    const action = {
      type: 'ADD_TO_CART',
      payload,
    };

    const expected = {
      cart: [productMock],
    };

    expect(reducer(initialState, action)).toEqual(expected);
  });
});
