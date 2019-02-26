import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import Media from './Media'
class Playlist extends Component {
  render() {
    const playlist = this.props.data.categories
    return (
      <div className="playlist">
        {playlist.map(e => {
          return <Media key={e.id} mediaData={e} />
        })}
      </div>
    )
  }
}

export default Playlist
