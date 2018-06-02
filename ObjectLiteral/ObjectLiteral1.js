function changeMe(arr) {
    for ( let i = 0; i < arr.length; i++ ){
        let biographyObject = {
            firstName: arr[i][0],
            lastName: arr[i][1],
            gender: arr[i][2],
            age: '',
        }
        if ( arr[i].length === 4 ){ biographyObject.age = arr[i][3] }
        else { biographyObject.age = 'Invalid Birth Year' }
        
        console.log((i+1) + ". " + biographyObject.firstName + " " + biographyObject.lastName)
        console.log(biographyObject)
    }
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 36 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""
  