var frontEnd = ['HTML', 'CSS', 'Javascript'];
var df = 1
var frontEndLangages = frontEnd;

var Jet = function(color, size) {
  this.color = color;
  this.size = size;

  this.fly = function() {
    console.log('whoosh!');
  this.takeOff = function() {
    console.log('lift off!');
  }
}

module.exports = Jet;
