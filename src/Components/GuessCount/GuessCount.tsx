import React, { FC } from 'react'
import './GuessCount.css'

interface IGuessCountProps {
  guesses: number
}

const GuessCount: FC<IGuessCountProps> = ({ guesses }) => (
  <div className="guesses">{guesses}</div>
)

export default GuessCount
