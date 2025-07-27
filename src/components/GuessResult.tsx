import React from 'react'

interface GuessResultProps {
  result?: 'too high' | 'too low' | 'correct'
}

const GuessResult: React.FC<GuessResultProps> = ({ result }) => {
  if (!result) {
    return null
  }

  const formatted = `${result.charAt(0).toUpperCase()}${result.slice(1)}!`

  return (
    <div className="container flex-center">
      <p>{formatted}</p>
    </div>
  )
}

export default GuessResult