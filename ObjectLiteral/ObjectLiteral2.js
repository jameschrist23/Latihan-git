function shoppingTime(memberId, money) {
    if ( memberId === "" ){ return "Mohon maaf, toko X hanya berlaku untuk member saja" }
    else if ( money < 50000 ){ return "Mohon maaf, uang tidak cukup" }
    else {
        let ListPurchased = [];
        let currentMoney = money;
        if ( currentMoney >= 50000 ){
            ListPurchased.push('Sweater Uniklooh');
            currentMoney = currentMoney - 50000
        };
        if ( currentMoney >= 175000 ){
            ListPurchased.push('Sweater Uniklooh');
            currentMoney = currentMoney - 175000
        };
        if ( currentMoney >= 250000 ){
            ListPurchased.push('Baju H&N');
            currentMoney = currentMoney - 250000
        };
        if ( currentMoney >= 500000 ){
            ListPurchased.push('Baju Zoro');
            currentMoney = currentMoney - 500000
        };
        if ( currentMoney >= 1500000 ){
            ListPurchased.push('Sepatu Stacattu');
            currentMoney = currentMoney - 1500000
        };

        let Object = {
            memberId: memberId,
            money: money,
            listPurchased: ListPurchased,
        }

        Object.changeMoney = currentMoney;

        if ( ListPurchased.length !== 0) {return Object}
        else { return "Mohon maaf, toko X hanya berlaku untuk member saja" }
    }
  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
  