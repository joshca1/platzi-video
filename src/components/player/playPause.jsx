import React from 'react'
import Figure from '../icons/figure'
import './playPause.css'
const PlayPause = props => {
  return (
    <div className="PlayPause">
      {props.play ? (
        <button onClick={props.handleClick}>
          <Figure.Pause color="white" size={20} />
        </button>
      ) : (
        <button onClick={props.handleClick}>
          <Figure.Play color="white" size={20} />
        </button>
      )}
    </div>
  )
}

export default PlayPause
