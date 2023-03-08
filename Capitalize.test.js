const Capitalize = require('./Capitalize.js');

test('should return the capital of the string', () => {
    expect(Capitalize('capitalize')).toBe('CAPITALIZE');
});
test('should return the capital of the string', () => {
    expect(Capitalize('CapiTaLize')).toBe('CAPITALIZE');
});