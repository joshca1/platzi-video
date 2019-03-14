import React, { Component } from 'react'
import SearchLayout from '../layouts/searchLayout.jsx'
class Search extends Component {
  state = {
    value: 'Search a video'
  }
  searchSubmision = event => {
    event.preventDefault()
  }
  inputChanged = event => {
    this.setState({ value: event.target.value.replace(' ', '-') })
  }
  render() {
    return (
      <SearchLayout
        handleSubmit={this.searchSubmision}
        setRef={this.setRef}
        handleChange={this.inputChanged}
        value={this.state.value}
      />
    )
  }
}

export default Search
