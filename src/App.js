import React, { Component } from 'react'
import Playlist from './components/playlist'
import Sidebar from './components/sidebar/sidebar'
import Header from './components/header/header'
import './App.css'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ModalContainer from './widget/containers/modal'
import Modal from './components/modal/modal'
import Error from './components/error/error'
import Player from './components/player/videoPlayer'
import rootReducer from './store/reducers/reducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(logger, thunk))
)
class App extends Component {
  handleCloseModal = data => {
    store.dispatch({
      type: 'CLOSE_MODAL',
      payload: {
        active: false,
        mediaData: {}
      }
    })
  }
  state = {
    modal: false
  }
  actualizaStore = () => {
    this.setState({
      modal: store.getState().modal.active
    })
  }
  render() {
    store.subscribe(this.actualizaStore)
    return (
      <div className="App">
        <Provider store={store}>
          <Error>
            <Header />
            <Sidebar className="sidebar" />
            <Playlist />
            {this.state.modal && (
              <ModalContainer>
                <Modal handleClose={this.handleCloseModal}>
                  <Player />
                </Modal>
              </ModalContainer>
            )}
          </Error>
        </Provider>
      </div>
    )
  }
}

export default App
