import React, { Component } from 'react'
import '../../App.css'
class Header extends Component {
  render() {
    return (
      <div className="Header">
        <input type="text" placeholder="Buscar un artista, tema o amigo"></input>
      </div>
    )
  }
}

export default Header
