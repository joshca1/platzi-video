import React from 'react'
import './timer.css'
const Timer = props => {
  let { currentTime, duration } = props.timer
  let minutes = parseInt(duration / 60)
  let seconds = parseInt(duration) % 60
  if (currentTime === 2) {
    currentTime = 0
  }
  return (
    <div className="Timer">
      <h2>{currentTime + '/' + minutes + ':' + seconds}</h2>
    </div>
  )
}

export default Timer
