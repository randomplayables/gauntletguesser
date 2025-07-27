# Number Guess Gauntlet

A competitive two-player gauntlet game where one player (the challenger) selects a secret number and the other player (the opponent) tries to guess it within a limited number of attempts, receiving feedback (“too high”, “too low”, or “correct”) after each guess.

## How to Play

1. The challenger selects a secret number within the allowed range.  
2. The opponent submits a guess.  
3. The game provides feedback:
   - “Too high” if the guess is above the secret number.  
   - “Too low” if the guess is below the secret number.  
   - “Correct” if the guess matches the secret number.  
4. The opponent continues guessing until they find the secret number or run out of attempts.  
5. Once the game ends, the result is recorded and (in gauntlet mode) the challenge is resolved.

## Getting Started

Prerequisites:
- Node.js (>=14.x)
- npm

Install dependencies:
```bash
npm install
```

Start the development server:
```bash
npm run dev
```

Open http://localhost:3000 in your browser to play.

## Project Structure

- src/
  - components/ — React components for game UI (NumberPicker, NumberGuesser, GuessResult, History, etc.)  
  - hooks/ — Custom hooks managing game logic (`useGame.ts`)  
  - services/ — API service for gauntlet mode and session management (`apiService.ts`)  
  - constants/ — Game constants (number range, max attempts)  
  - types/ — TypeScript type definitions  
  - utils/ — Utility functions (e.g., `validateGuess.ts`)  
  - main.tsx — Application entry point  
  - App.tsx — Root component handling gauntlet setup and rendering  

## Build

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## License

This project is licensed under the MIT License.