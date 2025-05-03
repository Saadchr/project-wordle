import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState('');

  const handleInputChange = (event) => {
    // Convert to uppercase as per README requirement
    setGuess(event.target.value.toUpperCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    console.log(guess); // Log the guess (for now)
    setGuess(''); // Reset the input
  };

  return (
    // Add onSubmit handler to the form
    <form onSubmit={handleSubmit}>
      {/* Add label for accessibility as per README */}

      <input
        id="guess-input" // Add id to link with label
        type="text"
        value={guess} // Control the input value
        onChange={handleInputChange} // Handle input changes
        // Enforce exactly 5 uppercase letters
        pattern='[A-Z]{5}'
        // Set maxLength as well for better UX, though pattern handles validation
        maxLength={5}
        title="Please enter exactly 5 letters." // Tooltip for pattern mismatch
        required // Make the input required
      />

    </form>
  );
}

export default Game;
