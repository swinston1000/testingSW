var Jet = function(color, size) {
  this.color = color;
  this.size = size;

  this.takeOff = function() {
    console.log('lift off!');
  this.fly = function() {
    console.log('whoosh!');
  }
}

module.exports = Jet;
