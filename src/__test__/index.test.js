const randomString = require('../index');

describe('Testing functionalities of randomString', () => {
    test('should generate one random string', () => {
        expect(typeof randomString()).toBe('string');
    });

    test('validate that one city not exists', () => {
        expect(randomString()).not.toMatch(/Cordoba/);
    })
})