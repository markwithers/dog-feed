/**
 * @jsx React.DOM
 */
var React = require('react')

var TreatButton = React.createClass({
  render: function() {
    return <button onClick={this.click}>Add a treat</button>
  },
  click: function() {
    this.props.dog.treats++
  }
})

module.exports = TreatButton
