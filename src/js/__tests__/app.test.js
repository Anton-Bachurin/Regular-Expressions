import { order, orderByProps } from '../app';

test('Правильно сортируется персонаж', () => {
  const archer = {attack: 50, level: 3, name: 'лучник', defence: 45, health: 25};
  const sortedArcher = [
    { key: 'name', value: 'лучник' },
    { key: 'level', value: 3 },
    { key: 'attack', value: 50 },
    { key: 'defence', value: 45 },
    { key: 'health', value: 25 },
  ];

  expect(orderByProps(archer, order)).toEqual(sortedArcher);
});