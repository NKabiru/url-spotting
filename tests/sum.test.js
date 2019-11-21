const sum = require('../sum');

test('Adds two numbers', () => {
    expect(sum(1,2)).toBe(3);
});