import React, { Component } from 'react'
import Playlist from './components/playlist'
import Sidebar from './components/sidebar/sidebar'
import Header from './components/header/header'
import './App.css'
import data from './dummi-data/data.json'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Sidebar className="sidebar" />
        <Playlist data={data} />
      </div>
    )
  }
}

export default App
