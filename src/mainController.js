/**
 * @jsx React.DOM
 */

var React = require('react')
var KennelList = require('./kennelList.jsx')

class MainController {
  constructor(dogs) {
    React.renderComponent(
      <KennelList dogs={dogs} />,
      document.getElementById('container')
    )
  }
}

module.exports = MainController
