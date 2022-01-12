import actions from '../../actions';
import productMock from '../../__mocks__/productMock';

describe('Actions', () => {
  test('addToCart action', () => {
    const payload = productMock;
    const expected = {
      type: 'ADD_TO_CART',
      payload,
    };

    expect(actions.addToCart(payload)).toEqual(expected);
  });

  test('removeFromCart action', () => {
    const payload = productMock;
    const expected = {
      type: 'REMOVE_FROM_CART',
      payload,
    };

    expect(actions.removeFromCart(payload)).toEqual(expected);
  });
});
