import React from 'react'
import './videoPlayerLayout.css'
const VideoPlayerLayout = props => (
  <div className="VideoPlayer" ref={props.setPlayerRef}>
    {props.children}
  </div>
)

export default VideoPlayerLayout
