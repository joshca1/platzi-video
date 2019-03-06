import React from 'react'
import './progressBar.css'
const ProgressBar = props => {
  const changeProgress = event => {
    props.handleProgressChange(event.target.value)
  }
  return (
    <div className="progressBar">
      <input
        type="range"
        min="0"
        max={props.duration}
        value={props.value}
        onChange={changeProgress}
      />
    </div>
  )
}

export default ProgressBar
