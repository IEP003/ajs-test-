import health from '../basic';

test('status health', () => {
  const value = {name: "маг", health: 90};
  const result = health(value);
  expect(result).toBe('healthy');
});

test('status health', () => {
  const value = {name: "маг", health: 25};
  const result = health(value);
  expect(result).toBe('wounded');
});

test('status health', () => {
  const value = {name: "маг", health: 5};
  const result = health(value);
  expect(result).toBe('critical');
});
