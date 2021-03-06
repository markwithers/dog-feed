/**
 * @jsx React.DOM
 */
var React = require('react')

var Messages = React.createClass({
  getInitialState: function() {
    return { message: '' }
  },
  componentDidMount: function() {
    this.props.dog.on('talk', this.setMessage)
  },
  setMessage: function(message) {
    this.setState({ message: message })
    setTimeout(this.clearMessage, 2000)
  },
  clearMessage: function() {
    this.setState({ message: '' })
  },
  render: function() {
    return <span>{this.state.message}</span>
  }
})

module.exports = Messages
