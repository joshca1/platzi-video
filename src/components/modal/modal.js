import React from 'react'
import './modal.css'
function Modal(props) {
  const closeVideo = () => {
    props.handleClose()
  }
  return (
    <div className="Modal">
      {props.children}
      <div className="Modal-Backdrop" onClick={closeVideo} />
    </div>
  )
}
export default Modal
