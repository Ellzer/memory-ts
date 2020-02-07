import React from 'react'
import shuffle from 'lodash.shuffle'
import Card from './Card'
import GuessCount from './GuessCount'
import HallOfFame, { FAKE_HOF } from './HallOfFame'
import './App.css'

const SYMBOLS = '😀🎉💖🎩🐶🐱🦄🐬🌍🌛🌞💫🍎🍌🍓🍐🍟🍿'

class App extends React.Component {
  generateCards() {
    const result = []
    const candidates = shuffle(SYMBOLS)
    for (let card of candidates) {
      result.push(card, card)
    }
    return shuffle(result)
  }

  handleCardClick(card: string) {
    console.log(card, 'clicked')
  }

  render() {
    const won = new Date().getSeconds() % 2 === 0
    const cards = this.generateCards()
    return (
      <div className="memory">
        <GuessCount guesses={0} />
        {/* Please verify line below with Charly */}
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
