import getData from '../../utils/getData';

describe('getData fetch API', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('Call one API and return data', () => {
    const data = { data: '12345' };
    fetch.mockResponseOnce(JSON.stringify(data));

    getData('https://google.com').then(response => {
      expect(response.data).toEqual('12345');
    });
  });
});
