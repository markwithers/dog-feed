/** 
 * @jsx React.DOM 
 */
var assert = require('assert')
var React = require('react/addons')

jest.dontMock('../src/dog')
jest.dontMock('../src/messages.jsx')

var Dog = require('../src/dog')
var Messages = require('../src/messages.jsx');
var TestUtils = React.addons.TestUtils;

describe('messages', function() {
  it('doesnt respond to non talk events from the model', function(){
    var dog = new Dog()
    var messages = TestUtils.renderIntoDocument(<Messages dog={dog}/>)

    var oldText = messages.getDOMNode().textContent
    dog.trigger('say', 'no listening')
    assert.notEqual(oldText, messages.getDOMNode().textContent) 
  })
})
