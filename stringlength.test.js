const StringLength = require('./StringLength');

test('should return the length of the string', () => {
    expect(StringLength('str')).toBe(3);
    expect(StringLength('string')).toBe(6);
    expect(StringLength('passing')).toBe(7);
});

test('should throw an error if the string lenght is less than 1 character long', () => {
    expect(() => StringLength('')).toThrow('String must be between 1 and 10 characters long');
});

test('should throw an error if the string is more than 10 character', () => {
    expect(() => StringLength('this string is too long')).toThrow('String must be between 1 and 10 characters long');
});