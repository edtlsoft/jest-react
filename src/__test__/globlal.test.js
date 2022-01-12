
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


const reverseStringTwo = str => {
    return new Promise((resolve, reject) => {
        if (!str) {
            reject('The var str is required')
        }

        resolve(str.split('').reverse().join(''))
    })
}

test('Testing a promise', () => {
    return reverseStringTwo('Hello')
            .then(str => expect(str).toBe('olleH'));
})

test('Testing async/await', async() => {
    const reverseStr = await reverseStringTwo('Hello');
    expect(reverseStr).toBe('olleH');
})


// afterEach(() => console.log('After each test'))

// afterAll(() => console.log('After all tests'))

// beforeEach(() => console.log('Before each test'))

// beforeAll(() => console.log('Before all tests'))