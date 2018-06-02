function mengelompokkanAngka(arr) {
    let mainArray = [];
    let genapArray = [];
    let ganjilArray = [];
    let x3Array = [];
    for ( let i = 0; i < arr.length; i++ ){
        if ( arr[i]%2 === 0 && arr[i]%3 !== 0 ){ genapArray.push(arr[i]); }
        if ( arr[i]%2 === 1 && arr[i]%3 !== 0 ){ ganjilArray.push(arr[i]); }
        if ( arr[i]%3 === 0 ){ x3Array.push(arr[i]); }
    }
    
    mainArray.push(genapArray, ganjilArray, x3Array);
    return mainArray
    
  }
  
  // TEST CASES
  console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
  console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
  console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
  console.log(mengelompokkanAngka([])); // [ [], [], [] ]