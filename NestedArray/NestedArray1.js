function targetTerdekat(arr) {
    let oPos = [];
    let xPos = [];
    for ( let i = 0; i < arr.length; i++ ){
        if( arr[i] === 'o' ){ oPos.push(i) }
        else if( arr[i] === 'x' ){ xPos.push(i) }
    }
    let jarak = 100;
    for ( i = 0; i< oPos.length; i++ ){
        for ( let j = 0; j< xPos.length; j++ ){
            if ( Math.abs(xPos[j] - oPos[i]) < jarak ){
                jarak = Math.abs(xPos[j]-oPos[i])
            }
        }
    }
    if (xPos.length === 0){ jarak = 0;}
    if (oPos.length === 0){ jarak = 0;}
    return jarak
}

  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2