function digitsGrouper(arr){
    let arrHasil = []
    let arr1 = []
    let arr2 = []
    let arr3 = []
    let arr4 = []
    for ( let i = 0; i< arr.length; i++ ){
        if ( arr[i] < 10 ) {
            arr1.push(arr[i])
        }
        else if ( arr[i] < 100 ) {
            arr2.push(arr[i])
        }
        else if ( arr[i] < 1000 ) {
            arr3.push(arr[i])
        }
        else if ( arr[i] < 10000 ) {
            arr4.push(arr[i])
        }
    }
    arrHasil.push(arr1, arr2, arr3, arr4)
    return arrHasil
}



console.log(digitsGrouper([1, 122, 13, 0, 88, 123, 456]));

// [[1,0], [12,13,88], [123, 456], []]