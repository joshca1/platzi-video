import React from 'react'
import './searchResults.css'
const baseUrl = require.context('../../images/covers/', true)
const SearchResults = props => {
  return (
    <div className="search-results">
      <h2>Results:</h2>
      {props.data.length === 0 && <h3>No results found</h3>}
      <div className="Media-contenido">
        {props.data.map(e => {
          return (
            <div
              className="cuadro"
              key={e.id}
              onClick={() => {
                props.handleClose(e)
              }}
            >
              <img src={baseUrl('./' + e.cover)} alt="cover" />
              <p>{e.title}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SearchResults
