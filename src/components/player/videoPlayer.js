import React, { Component } from 'react'
import VideoPlayerLayout from './components/videoPlayerLayout'
import VideoContainer from './containers/video'
import PlayPause from './playPause'
import Title from './components/title'
import './components/videoPlayerLayout.css'
class VideoPlayer extends Component {
  state = {
    play: true
  }
  handleClick = e => {
    this.setState({
      play: !this.state.play
    })
  }
  render() {
    return (
      <VideoPlayerLayout>
        <Title title="Esto esta muy CHido" />
        <PlayPause play={this.state.play} handleClick={this.handleClick} />
        <VideoContainer play={this.state.play} />
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer
