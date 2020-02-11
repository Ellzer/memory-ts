import React, { Component, ChangeEvent, FormEvent } from 'react'
import './HighScoreInput.css'

import { saveHOFEntry } from '../HallOfFame/HallOfFame'

interface IHighScoreInputProps {
  guesses: number
  onStored: (hallOfFame: []) => void
}

interface IHighScoreInputState {
  winner: string
}

class HighScoreInput extends Component<
  IHighScoreInputProps,
  IHighScoreInputState
> {
  state = { winner: '' }

  // Arrow fx for binding
  handleWinnerUpdate = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ winner: event.target.value.toUpperCase() })
  }

  // Arrow fx for binding
  persistWinner = (event: FormEvent) => {
    event.preventDefault()
    const newEntry = { guesses: this.props.guesses, player: this.state.winner }
    saveHOFEntry(newEntry, this.props.onStored)
  }

  render() {
    return (
      <form className="highScoreInput" onSubmit={this.persistWinner}>
        <p>
          <label>
            Bravo ! Entre ton prénom :
            <input
              autoComplete="given-name"
              type="text"
              onChange={this.handleWinnerUpdate}
              value={this.state.winner}
            />
          </label>
          <button type="submit">J’ai gagné !</button>
        </p>
      </form>
    )
  }
}

export default HighScoreInput
