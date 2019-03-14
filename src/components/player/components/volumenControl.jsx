import React from 'react'
import './volumenControl.css'
import Figure from '../../icons/figure'
const VolumenControl = props => {
  const changeVolumen = event => {
    props.controlVolumen(event.target.value)
  }
  const muteVolume = e => {
    props.muteVideo()
  }
  return (
    <div className="Volume">
      <button onClick={muteVolume}>
        {Number(props.volumen) === 0 ? (
          <Figure.Muted color="white" size={20} />
        ) : (
          <Figure.Volume color="white" size={20} />
        )}
      </button>
      <input
        type="range"
        min="0"
        max="100"
        value={props.volumen}
        onChange={changeVolumen}
      />
    </div>
  )
}

export default VolumenControl
