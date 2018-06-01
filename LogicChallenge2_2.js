function angkaPalindrome(num) {
    let currentNumber = num + 1;
    let bool = isPalindrome(currentNumber)
    while ( bool === false ){ currentNumber++; bool = isPalindrome(currentNumber); }
    if ( bool === true ){ return currentNumber }
}

function isPalindrome(num) {
    let number = num;
    let numberReversed = 0;

    while ( number > 0 ){
        let digitKanan = Math.floor(number%10);
        numberReversed = numberReversed*10 + digitKanan;
        number = Math.floor(number / 10);
    }
    
    if ( num === numberReversed ) {
        return true;
    } else { return false; }
}
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001
  