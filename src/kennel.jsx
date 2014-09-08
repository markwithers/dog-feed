/**
 * @jsx React.DOM
 */

var React = require('react')
var TreatButton = require('./treatButton.jsx')
var Messages = require('./messages.jsx')

var Kennel = React.createClass({
  componentDidMount: function() {
    this.props.dog.on('change:treats', this.forceUpdate.bind(this, null))
  },
  componentDidUnmount: function() {
    // remove listener
  },
  render: function() {
    return <div>
      <label>{this.props.label}</label>
      <div>There are {this.props.dog.treats} treats in the kennel</div>
      <TreatButton dog={this.props.dog} />
      <br />
      <Messages dog={this.props.dog} />
    </div>
  }
})

module.exports = Kennel
