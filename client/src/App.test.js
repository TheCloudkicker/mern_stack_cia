import { render, screen } from '@testing-library/react';
import App from './App';

import { validateString } from './components/validateInputs'

test('input validator works with spaces', () => {
  const testString = 'the boston red sox'
  return validateString(testString).then(data => {
    expect(data.parsedArray).toEqual(['the', 'boston', 'red', 'sox'])
  })
})

test('input validator works with commas', () => {
  const testString = 'the,boston,red,sox'
  return validateString(testString).then(data => {
    expect(data.parsedArray).toEqual(['the', 'boston', 'red', 'sox'])
  })
})

test('input validator works with double quotes', () => {
  const testString = 'the boston "red sox"'
  return validateString(testString).then(data => {
    expect(data.parsedArray).toEqual(['the', 'boston', 'red sox'])
  })
})

test('input validator errors out if odd number of double quotes', () => {
  const testString = 'the boston "red sox'
  return validateString(testString).then(data => {
    expect(data.status).toEqual(false)
  })
})
