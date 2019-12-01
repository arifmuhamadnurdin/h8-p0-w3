function pasanganTerbesar(num) {
  // you can only write your code here!
  var angka = []
  for (let i = 0; i < String(num).length-1; i++) {
      angka.push(Number(String(num)[i] + String(num)[i+1]))
  }
  var angkaTerbesar = 0
  for (let j = 0; j < angka.length; j++) {
      if(angkaTerbesar < angka[j]){
          angkaTerbesar = angka[j]
      }
      
  }
  return angkaTerbesar 
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99