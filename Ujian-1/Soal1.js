function drawThreeColsBox(num) {
    let angka = 1;
    let arr = [];
    for ( let i = 0; i < num; i++ ){
        let tempArr = [];
        for ( let j = 0; j< 3; j++ ){
            tempArr.push(angka)
            angka++
        }
        tempArr = tempArr.toString()
        arr.push(tempArr)
    }
    for ( i = 0; i< num; i++ ){
        arr[i] = arr[i].split(",")
        let str = arr[i][0] + " " + arr[i][1] + " " + arr[i][2]
        console.log( str )
    }
}


drawThreeColsBox(5);