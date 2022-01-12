const cities = [
    'Cucuta',
    'Bogota',
    'Medellin',
    'Cali',
    'Barranquilla',
    'Pasto',
];

const randomString = () => {
    const numRandom = Math.floor(Math.random() * cities.length);
    return cities[numRandom];
}

const reverseStringTwo = str => {
    return new Promise((resolve, reject) => {
        if (!str) {
            reject('The var str is required')
        }

        resolve(str.split('').reverse().join(''))
    })
}

module.exports = randomString;