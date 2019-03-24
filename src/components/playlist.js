import React, { Component } from 'react'
import Media from './Media'
import SearchResults from '../components/searchResults'
import { connect } from 'react-redux'
class Playlist extends Component {
  openModal = data => {
    this.props.dispatch({
      type: 'LOAD_DATA_MODAL',
      payload: {
        active: true,
        mediaData: data
      }
    })
  }
  render() {
    let playlist = this.props.cat
    let filteredPlaylist = this.props.filterPlaylist
    return (
      <div className="playlist">
        {filteredPlaylist && (
          <SearchResults data={filteredPlaylist} handleClose={this.openModal} />
        )}
        {playlist.map(e => {
          return <Media key={e.id} mediaData={e} handleClose={this.openModal} />
        })}
      </div>
    )
  }
}
function mapStateProps(state, props) {
  const cat = state.data.categories.map(catId => {
    const playlist = state.data.entities.categories[catId].playlist.map(
      playlistId => {
        return state.data.entities.media[playlistId]
      }
    )
    return { ...state.data.entities.categories[catId], playlist }
  })
  return {
    filterPlaylist: state.data.query,
    cat
  }
}
export default connect(mapStateProps)(Playlist)
