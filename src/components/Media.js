import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../App.css'
class Media extends Component {
  render() {
    const { description, title, playlist } = this.props.mediaData
    return (
      <div className="Media">
        <p>
          Descripcion: {description} titulo: {title}
        </p>
        <div className="Media-contenido">
          {playlist.map(p => {
            return (
              <div key={p.id}>
                <img src={p.cover} alt="cover" />
                {p.title}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

Media.propTypes = {
  mediaData: PropTypes.object,
  type: PropTypes.oneOf(['video', 'audio'])
}
export default Media
