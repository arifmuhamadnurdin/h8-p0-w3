function mengelompokkanAngka(arr) {
  // you can only write your code here!
  
  var arr_result = [[],[],[]];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) {
      arr_result[2].push(arr[i])
      continue
    }
    if (arr[i] % 2 !== 0) {
      arr_result[1].push(arr[i])
      continue
    }
    if (arr[i] % 2 === 0) {
      arr_result[0].push(arr[i])
      continue
    }
  }
  return arr_result
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]