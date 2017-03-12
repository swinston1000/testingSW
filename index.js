var frontEnd = ['HTML', 'CSS', 'Javascript'];
var df = 1
var frontEndLangages = frontEnd;

var Jet = function(color, size) {
  this.color = color;
  this.size = size;

  this.fly = function() {
    console.log('whoosh!');
  }
}

module.exports = Jet;
