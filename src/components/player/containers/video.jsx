import React, { Component } from 'react'

class VideoContainer extends Component {
  state = {
    duration: 0,
    currentTime: 0
  }
  setCurrentTime = e => {
    this.props.setCurrentTime(parseInt(this.refs.video.currentTime))
  }
  setDuration = e => {
    this.props.setDuration(this.refs.video.duration)
  }
  render() {
    if (this.refs.video) {
      this.props.play ? this.refs.video.play() : this.refs.video.pause()
    }
    return (
      <div>
        <video
          ref="video"
          width="720"
          height="520"
          onTimeUpdate={this.setCurrentTime}
          onLoadedMetadata={this.setDuration}
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
        />
      </div>
    )
  }
}

export default VideoContainer
