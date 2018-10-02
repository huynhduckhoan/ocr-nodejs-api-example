function randomIntInc(low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low)
  }
  
function randomName(){
    var name = '';
    for(i = 0; i< 10; i++){
        name+=String.fromCharCode(randomIntInc(97,122))
    }
    return name + '.png';
}
  
module.exports = randomName();