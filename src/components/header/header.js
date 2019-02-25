import React, { Component } from 'react'
import '../../App.css'
import Figure from '../icons/figure'
import felices from '../../images/covers/felices.jpg'
class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="search-box">
          <input
            type="text"
            className="search"
            placeholder="Buscar un artista, tema o amigo"
          />
          <Figure.Pause color="black" size="20px" />
        </div>
        <div className="avatar">
          <img src={felices} alt="felices" />
          <span>Jhon Doe</span>
        </div>
      </div>
    )
  }
}

export default Header
