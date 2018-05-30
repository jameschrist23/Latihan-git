const hari = 21;
const bulan = 3;
const tahun = 1945;

let bulanName = "";

switch(bulan) {
    case 1:
        bulanName = 'Januari';
        break;
    case 2:
        bulanName = 'Februari';
        break;
    case 3:
        bulanName = 'Maret';
        break;
    case 4:
        bulanName = 'April';
        break;
    case 5:
        bulanName = 'Mei';
        break;
    case 6:
        bulanName = 'Juni';
        break;
    case 7:
        bulanName = 'Juli';
        break;
    case 8:
        bulanName = 'Agustus';
        break;
    case 9:
        bulanName = 'September';
        break;
    case 10:
        bulanName = 'Oktober';
        break;
    case 11:
        bulanName = 'November';
        break;
    case 12:
        bulanName = 'Desember';
        break;
}

console.log( hari + " " + bulanName + " " + tahun);