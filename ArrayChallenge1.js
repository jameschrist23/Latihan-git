var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

for ( let i = 0; i < input.length; i++){
    for ( let j = 0; j< input[i].length; j++){
        switch(j) {
            case 0:
                console.log('Nomor ID: ' + input[i][j])
                break;
            case 1:
                console.log('Nama Lengkap: ' + input[i][j])
                break;
            case 2:
                console.log('TTL: ' + input[i][j] + " " + input[i][j+1]);
                j++;
                break;
            case 4:
                console.log('Hobi: ' + input[i][j])
                break;
        }
    }
    console.log('\n');
}
