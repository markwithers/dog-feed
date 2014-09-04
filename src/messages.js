/**
 * @jsx React.DOM
 */
var React = require('react')

var Messages = React.createClass({
  getInitialState: function() {
    return { message: '' }
  },
  componentDidMount: function() {
    var self = this

    this.props.dog.on('talk', function(noise) {
      self.setState({ message: noise })
      self.forceUpdate()
      setTimeout(self.clearMessage, 2000)
    })
  },
  clearMessage: function() {
    this.setState({ message: '' })
    this.forceUpdate()
  },
  render: function() {
    return <span>{this.state.message}</span>
  }
})

module.exports = Messages
