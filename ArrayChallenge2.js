var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

var namaAwal = input[1]

function dataHandling2(input) {
    input.splice(1, 1, input[1] + 'Elsharawy')
    input.splice(2, 1, 'Provinsi ' + input[2])
    input.splice(4, 1, 'Pria', 'SMA Internasional Metro')
    return input
};

var hasil = dataHandling2(input)

console.log(hasil);

var dates = hasil[3].split("/")
var bulanName = '';
switch(dates[1]) {
    case '01':
        bulanName = 'Januari';
        break;
    case '02':
        bulanName = 'Februari';
        break;
    case '03':
        bulanName = 'Maret';
        break;
    case '04':
        bulanName = 'April';
        break;
    case '05':
        bulanName = 'Mei';
        break;
    case '06':
        bulanName = 'Juni';
        break;
    case '07':
        bulanName = 'Juli';
        break;
    case '08':
        bulanName = 'Agustus';
        break;
    case '09':
        bulanName = 'September';
        break;
    case '10':
        bulanName = 'Oktober';
        break;
    case '11':
        bulanName = 'November';
        break;
    case '12':
        bulanName = 'Desember';
        break;
}

console.log(bulanName);
console.log(dates);
console.log (dates[0] + '-' + dates[1] + '-' + dates[2]);
console.log (namaAwal)