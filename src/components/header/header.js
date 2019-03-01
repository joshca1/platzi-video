import React, { Component } from 'react'
import '../../App.css'
import felices from '../../images/covers/felices.jpg'
import Seach from './containers/search'
class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Seach />
        <div className="avatar">
          <img src={felices} alt="felices" />
          <span>Jhon Doe</span>
        </div>
      </div>
    )
  }
}

export default Header
