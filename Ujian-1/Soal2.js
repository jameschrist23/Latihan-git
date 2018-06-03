/*

SKELETON CODE

INPUT array [ x, y, z, a, b, c, d, e, ...]
VARIABLE arrayHasil

LOOPING FOR until array Length.
    VARIABLE value
    IF i = 0 ( pertama kali ), value = cuman tambah depannya aja ( x+y )
    ELSE IF i = terakhir, value = cuman tambah belakangnya aja ( e+d misalnya) 
    ELSE normal. ( tambah belakang tambah depan)
    value di PUSH ke arrayHasil

VARIABLE sumGanjil

LOOPING cek satu satu ArrayHasil apakah ganjil ( %2 === 1 )
    kalau ganjil angka ditambah ke sumGanjil

OUTPUT sumGanjil

*/

const arrInput = [ 2, 5, 1, 3 ];
let arrResult = [];

for ( let i = 0; i < arrInput.length; i++ ){
    let value = 0;
    if ( i === 0 ){ value = arrInput[i] + arrInput[i+1]; }
    else if ( i === arrInput.length-1 ){ value = arrInput[i-1] + arrInput[i]; }
    else { value = arrInput[i-1] + arrInput[i] + arrInput[i+1]; }
    arrResult.push(value)
}

let sumGanjil = 0;
for ( i = 0; i < arrResult.length; i++ ){
    if ( arrResult[i]%2 === 1 ){ sumGanjil = sumGanjil + arrResult[i]}
}
console.log(sumGanjil)


