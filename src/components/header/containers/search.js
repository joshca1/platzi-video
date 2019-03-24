import React, { Component } from 'react'
import SearchLayout from '../layouts/searchLayout.jsx'
import { connect } from 'react-redux'
class Search extends Component {
  state = {
    value: ''
  }
  searchSubmision = event => {
    event.preventDefault()
    this.props.dispatch({
      type: 'SEARCH_VIDEO',
      payload: {
        query: event.target.search.value
      }
    })
  }
  inputChanged = event => {
    this.setState({ value: event.target.value })
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
function mapStateProps(state, props) {
  return {
    categories: state.categories
  }
}
export default connect(mapStateProps)(Search)
