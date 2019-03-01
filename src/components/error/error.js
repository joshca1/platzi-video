import React, { Component } from 'react'

class ErrorHandler extends Component {
  state = {
    handleError: false
  }

  componentDidCatch(error, info) {
    this.setState({
      ...this.state,
      handleError: true
    })
  }
  render() {
    if (this.state.handleError) return <p>Errror 404</p>
    return this.props.children
  }
}

export default ErrorHandler
