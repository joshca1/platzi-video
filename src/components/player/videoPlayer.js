import React, { Component } from 'react'
import VideoPlayerLayout from './components/videoPlayerLayout'
import VideoContainer from './containers/video'
import PlayPause from './playPause'
import Title from './components/title'
import Timer from './components/timer'
import ProgressBar from './components/progressBar'
import Spinner from './components/spinner'
import VolumenControl from './components/volumenControl'
import formatTime from '../../utils/formatTime'
import VideoPlayerControls from './components/videoPlayerControls'
import './components/videoPlayerLayout.css'
class VideoPlayer extends Component {
  state = {
    play: true,
    duration: '00:00',
    currentTime: '00:00',
    progressValue: 0,
    progressDuration: 0,
    loading: true,
    volumen: 30,
    tempVol: 0,
    mute: false
  }
  setDuration = event => {
    this.video = event.target
    this.setState({
      ...this.state,
      duration: formatTime(this.video.duration),
      progressDuration: parseInt(this.video.duration, 10)
    })
  }
  setCurrentTime = currentTime => {
    this.setState({
      ...this.state,
      currentTime: formatTime(currentTime),
      progressValue: parseInt(currentTime, 10)
    })
  }
  handleProgressChange = value => {
    this.video.currentTime = value
  }
  controlVolumen = val => {
    this.setState({
      volumen: val
    })
    this.video.volume = val / 100
  }
  handleLoading = loading => {
    this.setState({
      ...this.state,
      loading
    })
  }
  muteVideo = e => {
    this.setState({
      mute: !this.state.mute,
      tempVol: this.state.volumen
    })
    if (this.state.volumen > 0) {
      this.setState({
        mute: true,
        volumen: 0
      })
    }
    if (this.state.mute) {
      this.setState({
        volumen: this.state.tempVol
      })
    }
  }
  handleClick = e => {
    this.setState({
      play: !this.state.play
    })
  }
  render() {
    return (
      <VideoPlayerLayout>
        <Title title="Bunny and the rabbit " />
        <VideoPlayerControls>
          <PlayPause play={this.state.play} handleClick={this.handleClick} />
          <Timer timer={this.state} />
          <ProgressBar
            handleProgressChange={this.handleProgressChange}
            duration={this.state.progressDuration}
            value={this.state.progressValue}
          />
          <VolumenControl
            controlVolumen={this.controlVolumen}
            volumen={this.state.volumen}
            muteVideo={this.muteVideo}
          />
        </VideoPlayerControls>
        {this.state.loading && <Spinner />}
        <VideoContainer
          setDuration={this.setDuration}
          setCurrentTime={this.setCurrentTime}
          play={this.state.play}
          progressValue={this.state.progressValue}
          handleLoading={this.handleLoading}
          volume={this.state.volumen}
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
        />
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer
