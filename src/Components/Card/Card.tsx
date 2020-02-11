import React, { FC } from 'react'
import './Card.css'

const HIDDEN_SYMBOL = '❓'

interface ICardProps {
  card: string
  feedback: 'hidden' | 'justMatched' | 'justMismatched' | 'visible'
  index: number
  onClick: (index: number) => void
}

const Card: FC<ICardProps> = ({ card, feedback, index, onClick }) => (
  <div className={`card ${feedback}`} onClick={() => onClick(index)}>
    <span className="symbol">
      {feedback === 'hidden' ? HIDDEN_SYMBOL : card}
    </span>
  </div>
)

export default Card
