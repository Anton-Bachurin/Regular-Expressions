import { Validator } from '../app';

test('Нет кириллицы', () => {
  const cyrillic = new Validator('Е_лена');
  
  expect(cyrillic.validateUsername()).toEqual(false);
});

test('Не больше трёх цифр подряд', () => {
  const fourNumerals = new Validator('Thom4235as');
  
  expect(fourNumerals.validateUsername()).toEqual(false);
});

test('Не должно начинаться с цифры', () => {
  const startNum = new Validator('24thomas');
  
  expect(startNum.validateUsername()).toEqual(false);
});

test('Не должно заканчиваться цифрой', () => {
  const endNum = new Validator('Thomas5');
  
  expect(endNum.validateUsername()).toEqual(false);
});

test('Не должно начинаться с тире', () => {
  const startDash = new Validator('-thomas');
  
  expect(startDash.validateUsername()).toEqual(false);
});

test('Не должно заканчиваться тире', () => {
  const endDash = new Validator('Thomas-');
  
  expect(endDash.validateUsername()).toEqual(false);
});

test('Не должно начинаться с нижнего подчёркивания', () => {
  const startUnderscore = new Validator('_thomas');
  
  expect(startUnderscore.validateUsername()).toEqual(false);
});

test('Не должно заканчиваться нижним подчёркиванием', () => {
  const endUnderscore = new Validator('Thomas_');
  
  expect(endUnderscore.validateUsername()).toEqual(false);
});

test('Правильно написанное имя', () => {
  const correctName = new Validator('T-ho901ma_s');
  
  expect(correctName.validateUsername()).toEqual(true);
});
