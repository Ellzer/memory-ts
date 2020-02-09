import React, { Component } from 'react'
import shuffle from 'lodash.shuffle'
import Card from './Card'
import GuessCount from './GuessCount'
import HallOfFame, { FAKE_HOF } from './HallOfFame'
import './App.css'

const SYMBOLS = '😀🎉💖🎩🐶🐱🦄🐬🌍🌛🌞💫🍎🍌🍓🍐🍟🍿'

interface IAppState {
  cards: string[]
  currentPair: string[]
  guesses: number
  matchedCardIndices: string[]
}

class App extends Component<{}, IAppState> {
  state: IAppState = {
    cards: this.generateCards(),
    currentPair: [],
    guesses: 0,
    matchedCardIndices: []
  }

  // …
  generateCards() {
    const result = []
    const candidates = shuffle(SYMBOLS)
    for (let card of candidates) {
      result.push(card, card)
    }
    return shuffle(result)
  }

  // Arrow fx for binding
  handleCardClick = (card: string) => {
    console.log(card, 'clicked', this)
  }

  getFeedbackForCard(index: string) {
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

  render() {
    const { cards, guesses, matchedCardIndices } = this.state
    const won = matchedCardIndices.length === cards.length
    return (
      <div className="memory">
        <GuessCount guesses={guesses} />
        {cards.map((card, index) => (
          <Card
            card={card}
            feedback="visible"
            onClick={this.handleCardClick}
            key={index}
          />
        ))}
        {won && <HallOfFame entries={FAKE_HOF} />}
      </div>
    )
  }
}

export default App
