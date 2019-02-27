import React, { Component } from 'react'
import Playlist from './components/playlist'
import Sidebar from './components/sidebar/sidebar'
import Header from './components/header/header'
import './App.css'
import data from './dummi-data/data.json'
import ModalContainer from './widget/containers/modal'
import Modal from './components/modal/modal'
class App extends Component {
  state = {
    modalVisible: false
  }
  handleCloseModal = (event) => {
    this.setState({
      modalVisible: false
    })
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Sidebar className="sidebar" />
        <Playlist data={data} />
        {this.state.modalVisible &&
          <ModalContainer>
            <Modal handleClose={this.handleCloseModal}>
              SOy  YO UN Modal
          </Modal>
          </ModalContainer>
        }
      </div>
    )
  }
}

export default App
