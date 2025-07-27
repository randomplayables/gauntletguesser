import React from 'react';
import NumberPicker from './NumberPicker';
import NumberGuesser from './NumberGuesser';
import GuessResult from './GuessResult';
import History from './History';
import useGame from '../hooks/useGame';

const GameBoard: React.FC = () => {
  const {
    phase,
    isLoading,
    error,
    secretNumber,
    guesses,
    currentGuess,
    attemptsLeft,
    pickNumber,
    setCurrentGuess,
    makeGuess,
  } = useGame();

  if (isLoading) {
    return (
      <div className="flex-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex-center">
        <p>Error: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="container flex-column">
      {phase === 'pick' && (
        <NumberPicker onPick={pickNumber} />
      )}
      {phase === 'guess' && (
        <>
          <NumberGuesser
            currentGuess={currentGuess}
            onChange={setCurrentGuess}
            onGuess={makeGuess}
            disabled={attemptsLeft <= 0}
          />
          <GuessResult result={guesses[guesses.length - 1]?.result} />
          <History guesses={guesses} />
        </>
      )}
      {phase === 'finished' && (
        <div className="flex-center flex-column">
          {guesses[guesses.length - 1]?.result === 'correct' ? (
            <h2>Congratulations! You guessed the number!</h2>
          ) : (
            <h2>Game Over! The number was {secretNumber}.</h2>
          )}
          <History guesses={guesses} />
        </div>
      )}
    </div>
  );
};

export default GameBoard;