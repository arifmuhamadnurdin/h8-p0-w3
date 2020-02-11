
function groupAnimals(animals) {
  // you can only write your code here!
  var hasil = [];
  var str = 'abcdefghijklmnopqrstuvwxyz'
  for(var i=0; i<str.length; i++){
    var arr = []
    for(var j=0; j<animals.length; j++){
      if(str[i]===animals[j][0]){
        arr.push(animals[j])
      }
    }
    if(arr.length>0){
      hasil.push(arr)
    }
  }
  return hasil;
}
// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]