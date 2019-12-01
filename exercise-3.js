//contoh input
var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970" , "Berkebun"]
]
function dataHandling(data){
    var hasil = ''
    for (let i = 0; i < data.length; i++) {
        hasil += 'Nomor Id: '+data[i][0] + '\n'
        hasil += 'Nama Lengkap: '+data[i][1] + '\n'
        hasil += 'TTL: '+data[i][2]+ ' '+ data[i][3] + '\n'
        hasil += 'Hobi: '+data[i][4] + '\n\n' 
    }
    return hasil
}
console.log(dataHandling(input))
// Nomor ID:  0001
// Nama Lengkap:  Roman Alamsyah
// TTL:  Bandar Lampung 21/05/1989
// Hobi:  Membaca

// Nomor ID:  0002
// Nama Lengkap:  Dika Sembiring
// TTL:  Medan 10/10/1992
// Hobi:  Bermain Gitar

// Nomor ID:  0003
// Nama Lengkap:  Winona
// TTL:  Ambon 25/12/1965
// Hobi:  Memasak

// Nomor ID:  0004
// Nama Lengkap:  Bintang Senjaya
// TTL:  Martapura 6/4/1970
// Hobi:  Berkebun