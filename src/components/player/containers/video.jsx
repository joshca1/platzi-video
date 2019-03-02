import React, { Component } from 'react'

class VideoContainer extends Component {
  render() {
    if (this.refs.video) {
      this.props.play ? this.refs.video.play() : this.refs.video.pause()
    }
    return (
      <video
        ref="video"
        autoPlay
        src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
      />
    )
  }
}

export default VideoContainer
