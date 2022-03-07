import React from 'react';
import {render, screen} from '@testing-library/react';
import {PriceCalculationService} from './SalaryCalculatorService';

test('renders learn react link', () => {
  const {calculate} = PriceCalculationService();

  expect(calculate(720)).toBe(655.26);
  expect(calculate(666)).toBe(613.62);
  expect(calculate(72034)).toBe(55552.62);
  expect(calculate(23)).toBe(22.17);
  expect(calculate(1234)).toBe(1047.88);
  expect(calculate(123456)).toBe(95209.27);

});
