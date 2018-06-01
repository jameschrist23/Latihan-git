function pasanganTerbesar(num) {
    let currentBiggest = 0;
    let digits = num.toString().split('')
    let twodigitsArray = [];
    
    for ( let i = 0; i< digits.length-1; i++){
        let twodigits = Math.floor((num/Math.pow(10, i))%100);
        twodigitsArray.push(twodigits);
    }
    
    for ( i = 0; i < twodigitsArray.length; i++) {
        let counter = 0;
        for ( let j = 0; j < twodigitsArray.length-1; j++) {
            if ( twodigitsArray[i] < twodigitsArray[j] ){
                counter++;
            }
        }
        if (counter === 0) { currentBiggest = twodigitsArray[i]; }
    }
    return currentBiggest
}
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99