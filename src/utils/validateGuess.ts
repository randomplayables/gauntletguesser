import { NUMBER_RANGE } from '../constants'

export function validateGuess(input: number): number {
  if (typeof input !== 'number' || isNaN(input)) {
    return NUMBER_RANGE.min
  }
  if (input < NUMBER_RANGE.min) {
    return NUMBER_RANGE.min
  }
  if (input > NUMBER_RANGE.max) {
    return NUMBER_RANGE.max
  }
  return input
}