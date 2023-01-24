const sum = require('./sum');

test('adds 2 + 4 to equal 6', () => {
  expect(sum(2, 4)).toBe(6);
});

test('adds 1 + 3 to equal 4', () => {
  expect(sum(1, 3)).toBe(4);
});

test('adds 100 + 3 to equal 103', () => {
  expect(sum(100, 3)).toBe(103);
});
