/**
 * @jsx React.DOM
 */

var React = require('react')
var Kennel = require('./kennel.jsx')
var TreatButton = require('./treatButton.jsx')
var Messages = require('./messages.jsx')

class MainController {
  constructor(dog) {
    React.renderComponent(
      <Kennel dog={dog} />,
      document.getElementById('kennel')
    )

    React.renderComponent(
      <TreatButton dog={dog} />,
      document.getElementById('button')
    )

    React.renderComponent(
      <Messages dog={dog} />,
      document.getElementById('messages')
    )
  }
}

module.exports = MainController
