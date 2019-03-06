import React, { Component } from 'react'

class VideoContainer extends Component {
  setCurrentTime = e => {
    this.props.setCurrentTime(parseInt(this.video.currentTime))
  }
  setDuration = event => {
    this.props.setDuration(event)
  }
  setRef = element => {
    this.video = element
  }
  loading = () => {
    this.props.handleLoading(true)
  }
  resumeViewing = () => {
    this.props.handleLoading(false)
  }

  render() {
    if (this.video) {
      this.video.volume = this.props.volume / 100
      this.props.play ? this.video.play() : this.video.pause()
    }
    return (
      <div>
        <video
          ref={this.setRef}
          onTimeUpdate={this.setCurrentTime}
          onLoadedMetadata={this.setDuration}
          value={this.props.progressValue}
          src={this.props.src}
          onWaiting={this.loading}
          onCanPlay={this.resumeViewing}
        />
      </div>
    )
  }
}

export default VideoContainer
