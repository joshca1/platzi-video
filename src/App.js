import React, { Component } from 'react'
import Playlist from './components/playlist'
import Sidebar from './components/sidebar/sidebar'
import Header from './components/header/header'
import './App.css'
import data from './dummi-data/data.json'
import ModalContainer from './widget/containers/modal'
import Modal from './components/modal/modal'
import Error from './components/error/error'
import Player from './components/player/videoPlayer'
class App extends Component {
  state = {
    modalVisible: false
  }
  handleCloseModal = event => {
    console.log(event)
    this.setState({
      modalVisible: !this.state.modalVisible
    })
  }
  render() {
    return (
      <div className="App">
        <Error>
          <Header />
          <Sidebar className="sidebar" />
          <Playlist data={data} handleClose={this.handleCloseModal} />
          {this.state.modalVisible && (
            <ModalContainer>
              <Modal handleClose={this.handleCloseModal}>
                <Player />
              </Modal>
            </ModalContainer>
          )}
        </Error>
      </div>
    )
  }
}

export default App
