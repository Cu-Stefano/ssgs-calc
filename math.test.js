const { sum, subtract, multiply, divide } = require('./math');

describe('Math operations', () => {
  // sum
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('adds -1 + -2 to equal -3', () => {
    expect(sum(-1, -2)).toBe(-3);
  });

  test('adds 0 + 0 to equal 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  // subtract
  test('subtracts 5 - 3 to equal 2', () => {
    expect(subtract(5, 3)).toBe(2);
  });

  test('subtracts -5 - -3 to equal -2', () => {
    expect(subtract(-5, -3)).toBe(-2);
  });

  test('subtracts 0 - 0 to equal 0', () => {
    expect(subtract(0, 0)).toBe(0);
  });

  // multiply
  test('multiplies 4 * 3 to equal 12', () => {
    expect(multiply(4, 3)).toBe(12);
  });

  test('multiplies -4 * -3 to equal 12', () => {
    expect(multiply(-4, -3)).toBe(12);
  });

  test('multiplies 4 * 0 to equal 0', () => {
    expect(multiply(4, 0)).toBe(0);
  });

  // divide
  test('divides 10 / 2 to equal 5', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('divides -10 / -2 to equal 5', () => {
    expect(divide(-10, -2)).toBe(5);
  });

  test('divides 0 / 10 to equal 0', () => {
    expect(divide(0, 10)).toBe(0);
  });

  test('throws error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero is not allowed');
  });
});
