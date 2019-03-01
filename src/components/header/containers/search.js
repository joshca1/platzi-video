import React, { Component } from 'react'
import SearchLayout from '../layouts/searchLayout.jsx'
class Search extends Component {
  state = {
    value: 'xxx TEntacion'
  }
  searchSubmision = event => {
    event.preventDefault()
    console.log(this.state)
  }
  inputChanged = event => {
    this.setState({ value: event.target.value.replace(' ', '-') })
    console.log('input changed', event.target.value)
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
