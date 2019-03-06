import React from 'react'
import './timer.css'
const Timer = props => {
  const { currentTime, duration } = props.timer
  return (
    <div className="Timer">
      <h2>{currentTime + '/' + duration}</h2>
    </div>
  )
}

export default Timer
