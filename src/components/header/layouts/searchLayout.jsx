import React from 'react'
import Figure from '../../icons/figure'
import '../layouts/search.css'
function SearchLayout(props) {
  return (
    <div className="search-box">
      <form action="" className="Search" onSubmit={props.handleSubmit}>
        <input
          type="text"
          className="Search-input"
          placeholder="Buscar un artista"
          name="search"
          onChange={props.handleChange}
          value={props.value}
        />
        <Figure.Pause color="black" size="20px" />
      </form>
    </div>
  )
}
export default SearchLayout
