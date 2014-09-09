/** 
 * @jsx React.DOM 
 */
var assert = require('assert')
var React = require('react/addons')

jest.dontMock('../src/models/dog')
jest.dontMock('../src/components/kennel.jsx')

var Dog = require('../src/models/dog')
var Kennel = require('../src/components/kennel.jsx');
var TestUtils = React.addons.TestUtils;

describe('Kennel', function() {
  it('changes text after a treat is added', function() {
    var dog = new Dog()
    var kennel = TestUtils.renderIntoDocument(<Kennel dog={dog}/>)
    var oldText = kennel.getDOMNode().textContent
    dog.treats++
    assert.notEqual(oldText, kennel.getDOMNode().textContent)
  })
})
