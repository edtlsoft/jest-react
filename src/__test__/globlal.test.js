
const text = "Hello world!";
const fruits = ["apple", "pinapple", "banana"];

test('Debe contener un texto', () => {
    expect(text).toMatch(/world/);
});

test('Do we have one banana?', () => {
    expect(fruits).toContain('banana')
})

test('Greater than', () => {
    expect(10).toBeGreaterThan(9);
})

test('Is true', () => {
    expect(true).toBeTruthy();
})

const reverseString = (str, callback) => {
    callback(str.split('').reverse().join(''));
}

test('Testing a callback', () => {
    reverseString('Hello', (str) => {
        expect(str).toBe('olleH')
    });
})
