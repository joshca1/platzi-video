import React, { Component } from 'react'
import VideoPlayerLayout from './components/videoPlayerLayout'
import VideoContainer from './containers/video'
import PlayPause from './playPause'
import Title from './components/title'
import Timer from './components/timer'
import VideoPlayerControls from './components/videoPlayerControls'
import './components/videoPlayerLayout.css'
class VideoPlayer extends Component {
  state = {
    play: true,
    duration: 0,
    currentTime: 0
  }
  setDuration = duration => {
    this.setState({ ...this.state, duration })
  }
  setCurrentTime = currentTime => {
    this.setState({ ...this.state, currentTime })
  }
  handleClick = e => {
    this.setState({
      play: !this.state.play
    })
  }
  render() {
    return (
      <VideoPlayerLayout>
        <Title title="Soy video " />
        <VideoPlayerControls>
          <PlayPause play={this.state.play} handleClick={this.handleClick} />
          <Timer timer={this.state} />
        </VideoPlayerControls>
        <VideoContainer
          setDuration={this.setDuration}
          setCurrentTime={this.setCurrentTime}
          play={this.state.play}
        />
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer
