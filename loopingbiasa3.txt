for ( let i = 1; i <= 100; i++ ) {
    let checker;
    if (i%2 !== 0) {
        checker = 'ganjil';
    } else { checker = 'genap'; }
    console.log(i + " " + checker)
}

for ( let j = 1; j <= 100; j += 2 ) {
    let checker3
    if ( j%3 === 0) {
        checker3= "KELIPATAN 3";
    } else { checker3 = ""; }
    console.log( j + " " + checker3)
}

for ( let k = 1; k <= 100; k += 5 ) {
    let checker6
    if ( k%6 === 0) {
        checker6= "KELIPATAN 6";
    } else { checker6 = ""; }
    console.log( k + " " + checker6)
}

for ( let l = 1; l <= 100; l += 9 ) {
    let checker10
    if ( l%10 === 0) {
        checker10= "KELIPATAN 10";
    } else { checker10 = ""; }
    console.log( l + " " + checker10)
}