function targetTerdekat(arr) {
  // you can only write your code here!
  var tampung=[]
    for(var i=0;i<arr.length;i++){
        if((arr[i]==='x' || arr[i]==='o') && tampung.length===0){
            tampung=[arr[i],i,0]
        }else if(arr[i]==='x' || arr[i]==='o'){
            if(arr[i]!==tampung[0]){ 
                if(tampung[2]===0||tampung[2]>Math.abs(i-tampung[1])){
                    tampung[2]=Math.abs(i-tampung[1])
                }
            }else{
                tampung=[arr[i],i,0]
            }
        }
    }
    return tampung[2]; 
}

// TEST CASES
console.log(targetTerdekat(['', '', 'o', '', '', 'x', '', 'x'])); // 3
console.log(targetTerdekat(['o', '', '', '', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', '', '', '', 'x', 'x', 'o', ''])); // 1
console.log(targetTerdekat(['', '', 'o', ''])); // 0
console.log(targetTerdekat(['', 'o', '', 'x', 'x', '', '', 'x'])); // 2