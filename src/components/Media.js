import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../App.css'
const baseUrl = require.context('../images/covers/', true)
class Media extends Component {
  render() {
    const { description, title, playlist } = this.props.mediaData
    return (
      <div className="Media">
        <h3>{description}</h3>
        <h4>titulo: {title}</h4>
        <div className="Media-contenido">
          {playlist.map(p => {
            return (
              <div className="cuadro" key={p.id}>
                <img src={baseUrl('./' + p.cover)} alt="cover" />
                <p>{p.title}</p>
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
