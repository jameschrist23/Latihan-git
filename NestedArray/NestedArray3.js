function groupAnimals(animals) {
    let databaseAlphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let categorizedArr = [];

    for ( let j = 0; j < databaseAlphabet.length; j++) {
        let tempArr = []
        for ( let i = 0; i<animals.length; i++ ) {
            if ( animals[i][0] === databaseAlphabet[j]){
                tempArr.push(animals[i]);
            }
        }
        if ( tempArr.length !== 0) {
            categorizedArr.push(tempArr)
        }
    }

    return categorizedArr;
}
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
  
  