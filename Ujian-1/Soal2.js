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


