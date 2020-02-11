import React, { Component } from 'react'
import './HighScoreInput.css'

import { saveHOFEntry } from '../HallOfFame/HallOfFame'

interface IHighScoreInputProps {
  guesses: number
}

class HighScoreInput extends Component<IHighScoreInputProps, {}> {
  render() {
    return (
      <form className="highScoreInput">
        <p>
          <label>
            Bravo ! Entre ton prénom :
            <input type="text" autoComplete="given-name" />
          </label>
          <button type="submit">J’ai gagné !</button>
        </p>
      </form>
    )
  }
}

export default HighScoreInput
