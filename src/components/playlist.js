import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import Media from './Media'
import '../App.css'
import Figure from './icons/figure'
class Playlist extends Component {
  state = {
    author: this.props.author
  }
  // handleClick = event => {
  //   this.setState((state, props) => {
  //     return { ...state, author: 'nuevo author' }
  //   })
  // }
  render() {
    const playlist = this.props.data.categories
    return (
      <div className="playlist">
        <Figure.Play size={50} color="red" />
        <Figure.FullScreen size={50} color="red" />
        <Figure.Volume size={50} color="red" />
        {playlist.map(e => {
          return <Media key={e.id} mediaData={e} />
        })}
      </div>
    )
  }
}

Playlist.propTypes = {}
export default Playlist
