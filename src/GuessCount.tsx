import React, { FC } from 'react'
import './GuessCount.css'

interface GuessCountProps {
  guesses: number
}

const GuessCount: FC<GuessCountProps> = ({ guesses }) => (
  <div className="guesses">{guesses}</div>
)

export default GuessCount
