import React from 'react';
import {render, screen} from '@testing-library/react';
import {CourseGradeService} from './CourseGradeService';

test('renders learn react link', () => {
  const {calculate} = CourseGradeService();

  expect(calculate(24, 24, 24)).toBe('failed');
  expect(calculate(50, 50, 24)).toBe('failed');
  expect(calculate(50, 24, 50)).toBe('failed');

  expect(calculate(26, 26, 26)).toBe('satisfactory');
  expect(calculate(50, 25, 25)).toBe('satisfactory');
  expect(calculate(33, 33, 34)).toBe('satisfactory');

  expect(calculate(33, 33, 35)).toBe('good');
  expect(calculate(50, 50, 25)).toBe('good');
  expect(calculate(46, 34, 27)).toBe('good');

  expect(calculate(50, 50, 26)).toBe('very good');
  expect(calculate(50, 50, 50)).toBe('very good');
  expect(calculate(46, 61, 55)).toBe('very good');
  // Add some tests (at least 2-3 tests per grade)
});
