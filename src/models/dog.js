var AmpersandModel = require('ampersand-model')

var Dog = AmpersandModel.extend({
  props: {
    treats: { type: 'number', default: 0 }
  },
  initialize: function() {
    this.eat = function() {
      if (this.treats > 0) {
        this.treats = this.treats - 2
        this.trigger('talk', 'Chomp chomp!')
      }
      else {
        this.trigger('talk', 'You hear a hungry woofing. Woof woof!')
      }
    }

    setInterval(this.eat.bind(this), 4000)
  }
})

module.exports = Dog
