import React, { FC } from 'react'
import './Card.css'

const HIDDEN_SYMBOL = '❓'

interface ICardProps {
  card: string
  feedback: string
  onClick: (card: string) => void
}

const Card: FC<ICardProps> = ({ card, feedback, onClick }) => (
  <div className={`card ${feedback}`} onClick={() => onClick(card)}>
    <span className="symbol">
      {feedback === 'hidden' ? HIDDEN_SYMBOL : card}
    </span>
  </div>
)

export default Card
