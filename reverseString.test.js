const reverseString = require('./reverseString.js');

test('should return the reverse of the string', () => {
    expect(reverseString('reverse')).toBe('esrever');
});