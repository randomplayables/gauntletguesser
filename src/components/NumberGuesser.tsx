import React from 'react'
import { NUMBER_RANGE } from '../constants'

interface NumberGuesserProps {
  currentGuess: number
  onChange: (value: number) => void
  onGuess: () => void
  disabled?: boolean
}

const NumberGuesser: React.FC<NumberGuesserProps> = ({
  currentGuess,
  onChange,
  onGuess,
  disabled = false,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10)
    if (!isNaN(value)) {
      onChange(value)
    } else {
      onChange(0)
    }
  }

  const isValid =
    currentGuess >= NUMBER_RANGE.min && currentGuess <= NUMBER_RANGE.max

  return (
    <div className="container flex-center flex-column">
      <input
        type="number"
        value={currentGuess}
        min={NUMBER_RANGE.min}
        max={NUMBER_RANGE.max}
        onChange={handleChange}
        disabled={disabled}
      />
      <button
        className="primary"
        onClick={onGuess}
        disabled={disabled || !isValid}
      >
        Guess
      </button>
    </div>
  )
}

export default NumberGuesser