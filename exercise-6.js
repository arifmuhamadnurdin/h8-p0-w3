function angkaPalindrome(num) {
  // you can only write your code here!
  function palindrome(num) {
    // you can only write your code here!
    var angkaBalik = '';
    for (var i = String(num).length-1; i >= 0; i--) {
    angkaBalik += String(num)[i];
    }
    return angkaBalik
 }
    if (num != palindrome(num)) {
        while (num != palindrome(num)) {
            num++
        }
    }else{
        num++
        while (num != palindrome(num)) {
            num++
        }
    }
    return num
}


// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001