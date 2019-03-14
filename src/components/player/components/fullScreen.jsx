import React from 'react'
import Figure from '../../icons/figure'
import './fullscreen.css'
const FullScreen = props => {
  const toggleScreen = () => {
    props.toggleScreen()
  }
  return (
    <div onClick={toggleScreen} className="fullscreen">
      <Figure.FullScreen color="white" size={20} />
    </div>
  )
}

export default FullScreen
