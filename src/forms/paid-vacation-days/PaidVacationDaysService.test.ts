import React from 'react';
import {render, screen} from '@testing-library/react';
import {PaidVacationDaysService} from './PaidVacationDaysService';

test('renders learn react link', () => {
  const {calculate} = PaidVacationDaysService();

  expect(calculate(14, 0)).toBe(27);
  expect(calculate(62, 0)).toBe(27);
  expect(calculate(20, 30)).toBe(27);
  expect(calculate(20, 14)).toBe(22);
  expect(calculate(25, 15)).toBe(24);
  expect(calculate(45, 0)).toBe(24);
  expect(calculate(60, 30)).toBe(30);
  expect(calculate(60, 15)).toBe(27);
  expect(calculate(60, 0)).toBe(27);
  expect(calculate(14, 30)).toBe(27);
  expect(calculate(46, 14)).toBe(24);

});
