import React from 'react'
import { Guess } from '../types'

interface HistoryProps {
  guesses: Guess[]
}

const History: React.FC<HistoryProps> = ({ guesses }) => {
  if (guesses.length === 0) {
    return null
  }

  return (
    <div className="container">
      <h3>Guess History</h3>
      <ul>
        {guesses.map((entry, index) => {
          const { guess, result } = entry
          const formattedResult = `${result.charAt(0).toUpperCase()}${result.slice(1)}`
          return (
            <li key={index}>
              Guess {index + 1}: {guess} - {formattedResult}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default History