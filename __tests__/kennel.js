/** 
 * @jsx React.DOM 
 */
var equal = require('assert')
var React = require('react/addons')

jest.dontMock('../src/dog')
jest.dontMock('../src/kennel.jsx')

var Dog = require('../src/dog')
var Kennel = require('../src/kennel.jsx');
var TestUtils = React.addons.TestUtils;

describe('Kennel', function() {
  it('changes text after a treat is added', function() {
    var dog = new Dog()
    var kennel = TestUtils.renderIntoDocument(<Kennel dog={dog}/>)
    var oldText = kennel.getDOMNode().textContent
    dog.treats++
    equal(false, kennel.getDOMNode().textContent == oldText)
  })
})
