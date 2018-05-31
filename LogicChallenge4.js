function xo(str) {
    let counterX = 0;
    let counterO = 0;
    for ( let i = 0 ; i <= str.length -1 ; i++ ){
        if (str[i] === 'x') {
            counterX++;
        } else if (str[i] === 'o') {
            counterO++;
        }
    }
    if (counterO === counterX) {
        return true;
    } else { return false; }
}   
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true
  