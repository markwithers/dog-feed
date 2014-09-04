/**
 * @jsx React.DOM
 */

var React = require('react')

var Kennel = React.createClass({
  componentDidMount: function() {
    this.props.dog.on('change:treats', this.forceUpdate.bind(this, null))
  },
  render: function() {
    return <div>There are {this.props.dog.treats} treats in the kennel</div>
  }
})

module.exports = Kennel
