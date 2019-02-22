import React, { Component } from 'react'
import Playlist from './components/playlist'
import Sidebar from './components/sidebar/sidebar'
import './App.css'
import data from './dummi-data/data.json'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Header">Header</div>
        <Sidebar />
        <Playlist data={data} />
      </div>
    )
  }
}

export default App
