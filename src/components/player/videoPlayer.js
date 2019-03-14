import React, { Component } from 'react'
import VideoPlayerLayout from './components/videoPlayerLayout'
import VideoContainer from './containers/video'
import PlayPause from './playPause'
import Title from './components/title'
import Timer from './components/timer'
import ProgressBar from './components/progressBar'
import FullScreen from './components/fullScreen'
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
    mute: false,
    fullScreen: false
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
    let intVolume = val / 100
    this.video.volume = intVolume

    this.setState({
      volumen: val,
      mute: intVolume === 0 ? true : false
    })
  }
  handleLoading = loading => {
    this.setState({
      ...this.state,
      loading
    })
  }
  muteVideo = e => {
    if (this.state.volumen > 0) {
      this.setState({
        tempVol: this.state.volumen,
        mute: true,
        volumen: 0
      })
    }
    if (this.state.mute) {
      this.setState({
        mute: false,
        volumen: this.state.tempVol
      })
    }
  }
  toggleScreen = e => {
    if (!this.state.fullScreen) {
      this.player.requestFullscreen()
    } else {
      document.exitFullscreen()
    }

    this.setState({
      fullScreen: !this.state.fullScreen
    })
  }
  setPlayerRef = e => {
    this.player = e
  }
  handleClick = e => {
    this.setState({
      play: !this.state.play
    })
  }
  handleCloseModal = e => {
    this.props.handleClose()
  }
  render() {
    return (
      <VideoPlayerLayout setPlayerRef={this.setPlayerRef}>
        <Title title={this.props.videoData.title} />
        <div onClick={this.handleCloseModal} className="close" />
        {this.state.loading && <Spinner />}
        <VideoContainer
          setDuration={this.setDuration}
          setCurrentTime={this.setCurrentTime}
          play={this.state.play}
          progressValue={this.state.progressValue}
          handleLoading={this.handleLoading}
          volume={this.state.volumen}
          src={this.props.videoData.src}
        />
        <VideoPlayerControls>
          <PlayPause play={this.state.play} handleClick={this.handleClick} />
          <VolumenControl
            controlVolumen={this.controlVolumen}
            volumen={this.state.volumen}
            muteVideo={this.muteVideo}
          />
          <Timer timer={this.state} />
          <ProgressBar
            handleProgressChange={this.handleProgressChange}
            duration={this.state.progressDuration}
            value={this.state.progressValue}
          />
          <FullScreen toggleScreen={this.toggleScreen} />
        </VideoPlayerControls>
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer
