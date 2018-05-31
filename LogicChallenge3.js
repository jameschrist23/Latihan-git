function konversiMenit(menit) {
    let hasilKonversiDetik = menit % 60;
    if( hasilKonversiDetik < 10 ){
        hasilKonversiDetik= "0"+hasilKonversiDetik;
    }
    let hasilKonversiMenit = Math.round(menit / 60) ;
    return (hasilKonversiMenit + ":" + hasilKonversiDetik);
  }
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00