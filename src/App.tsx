import React from 'react'
import Card from './Card'
import GuessCount from './GuessCount'
import './App.css'

class App extends React.Component {
  handleCardClick(card: string) {
    console.log(card, 'clicked')
  }

  render() {
    return (
      <div className="memory">
        <GuessCount guesses={0} />
        <Card card="😀" feedback="hidden" onClick={this.handleCardClick} />
        <Card card="🎉" feedback="justMatched" onClick={this.handleCardClick} />
        <Card
          card="💖"
          feedback="justMismatched"
          onClick={this.handleCardClick}
        />
        <Card card="🎩" feedback="visible" onClick={this.handleCardClick} />
        <Card card="🐶" feedback="hidden" onClick={this.handleCardClick} />
        <Card card="🐱" feedback="justMatched" onClick={this.handleCardClick} />
      </div>
    )
  }
}
export default App
