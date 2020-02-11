import React, { Component } from 'react'
import shuffle from 'lodash.shuffle'
import Card from './Components/Card/Card'
import GuessCount from './Components/GuessCount/GuessCount'
import HallOfFame, { FAKE_HOF } from './Components/HallOfFame/HallOfFame'
import HighScoreInput from './Components/HighScoreInput/HighScoreInput'
import './App.css'

const SYMBOLS = '😀🎉💖🎩🐶🐱🦄🐬🌍🌛🌞💫🍎🍌🍓🍐🍟🍿'
const VISUAL_PAUSE_MSECS = 750

interface IAppState {
  cards: string[]
  currentPair: number[]
  guesses: number
  matchedCardIndices: number[]
}

class App extends Component<{}, IAppState> {
  state: IAppState = {
    cards: this.generateCards(),
    currentPair: [],
    guesses: 0,
    matchedCardIndices: []
  }

  generateCards() {
    const result = []
    const candidates = shuffle(SYMBOLS)
    for (let card of candidates) {
      result.push(card, card)
    }
    return shuffle(result)
  }

  getFeedbackForCard(index: number) {
    const { currentPair, matchedCardIndices } = this.state
    const indexMatched = matchedCardIndices.includes(index)

    if (currentPair.length < 2) {
      return indexMatched || index === currentPair[0] ? 'visible' : 'hidden'
    }

    if (currentPair.includes(index)) {
      return indexMatched ? 'justMatched' : 'justMismatched'
    }

    return indexMatched ? 'visible' : 'hidden'
  }

  // Arrow fx for binding
  handleCardClick = (index: number) => {
    const { currentPair } = this.state

    if (currentPair.length === 2) {
      return
    }

    if (currentPair.length === 0) {
      this.setState({ currentPair: [index] })
      return
    }

    this.handleNewPairClosedBy(index)
  }

  handleNewPairClosedBy(index: number) {
    const { cards, currentPair, guesses, matchedCardIndices } = this.state

    const newPair = [currentPair[0], index]
    const newGuesses = guesses + 1
    const matched = cards[newPair[0]] === cards[newPair[1]]
    this.setState({ currentPair: newPair, guesses: newGuesses })
    if (matched) {
      this.setState({ matchedCardIndices: [...matchedCardIndices, ...newPair] })
    }
    setTimeout(() => this.setState({ currentPair: [] }), VISUAL_PAUSE_MSECS)
  }

  render() {
    const { cards, guesses, matchedCardIndices } = this.state
    const won = matchedCardIndices.length === cards.length
    return (
      <div className="memory">
        <GuessCount guesses={guesses} />
        {cards.map((card, index) => (
          <Card
            card={card}
            feedback={this.getFeedbackForCard(index)}
            index={index}
            key={index}
            onClick={this.handleCardClick}
          />
        ))}
        <HighScoreInput guesses={guesses} />
        {won && <HallOfFame entries={FAKE_HOF} />}
      </div>
    )
  }
}

export default App
