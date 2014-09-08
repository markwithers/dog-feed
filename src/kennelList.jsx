/**
 * @jsx React.DOM
 */
var React = require('react')
var Kennel = require('./kennel.jsx')
var Adder = require('./adder.jsx')

var KennelList = React.createClass({
  componentDidMount: function() {
    this.props.dogs.on('add', this.forceUpdate.bind(this, null))
  },
  render: function() {
    var kennels = this.props.dogs.map(function (dog) {
      return <Kennel dog={dog} />
    })
    return <div>
      {kennels}
      <Adder dogs={this.props.dogs} />
    </div>
  }
})

module.exports = KennelList
