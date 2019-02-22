import React, { Component } from 'react'
import '../../App.css'
import logo from '../../images/logo.png'
class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <img src={logo} alt="logo" />
      </div>
    )
  }
}

export default Sidebar
