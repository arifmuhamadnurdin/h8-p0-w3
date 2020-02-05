function balikString(kata) {
  
  let kalimat = ''
  for (let i = kata.length-1; i >= 0; i--){
      kalimat += kata[i]
  } 
  return kalimat
}

console.log(balikString('Hello World')); //dlroW olleH
