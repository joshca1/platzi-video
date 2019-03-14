import React, { Component } from 'react'
import './sidebar.css'
import logo from '../../images/logo.png'
class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <img src={logo} alt="logo" />
        <ol>
          <li>Despacito</li>
          <li>Platzi</li>
          <li>Gangam Style</li>
          <li>Visual Studio</li>
        </ol>
      </div>
    )
  }
}

export default Sidebar
