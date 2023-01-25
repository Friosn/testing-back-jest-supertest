const sum = require('./sum');

test('Suma 2 + 3 para obtener 5', () => {
  expect(sum(2, 3)).toBe(5);
});
