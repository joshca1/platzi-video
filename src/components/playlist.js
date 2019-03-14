import React, { Component } from 'react'
import Media from './Media'
class Playlist extends Component {
  openModal = data => {
    this.props.handleClose(data)
  }
  render() {
    const playlist = this.props.data.categories
    return (
      <div className="playlist">
        {playlist.map(e => {
          return <Media key={e.id} mediaData={e} handleClose={this.openModal} />
        })}
      </div>
    )
  }
}

export default Playlist
