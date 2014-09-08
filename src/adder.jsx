/**
 * @jsx React.DOM
 */
var React = require('react')

var Adder = React.createClass({
  render: function() {
    return <button onClick={this.click}>Add a doggie!</button>
  },
  click: function() {
    this.props.dogs.add({treats: 4})
  }
})

module.exports = Adder
