function palindrome(kata) {
    var kataAwal = kata
    var kataKebalik = kata.split('').reverse().join('')
    return kataAwal === kataKebalik
  }
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false