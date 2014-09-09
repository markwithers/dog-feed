/**
 * @jsx React.DOM
 */
var React = require('react')

var Button = React.createClass({
  render: function() {
    return <button onClick={this.click}></button>
  },
  click: function() {
    this.props.viewModel.clickFn.bind(this)
  }
})

module.exports = Button
