const { add } = require('../src/alpha/alpha_ext')

test('boring add test', () => {
    const num = add(1,4);
    expect(num).toBe(5);
});
