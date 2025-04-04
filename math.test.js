const sum = require('./math');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test.skip('adds  2 + 2 to equal 5 (WRONG)', () => {
  expect(sum(2, 2)).toBe(5);
});