var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
function dataHandling2(data){
    // vsplice
    data.splice(1,1,'Roman Alamsyah Elsharawy')
    data.splice(2,1,'Provinsi Bandar Lampung')
    data.splice(4,1,'Pria')
    data.splice(5,0,'SMA Internasional Metro')
    console.log(data)
    //split
    var hasilSplit = data[3].split('/')
    var hasilSplit2 = data[3].split('/')
    var hasilSplit3 = data[3].split('/')
    // console.log(hasilSplit)
    
    //switch case
    switch(hasilSplit[1]){
        case '01':
            hasilSplit[1] = 'Januari'
            break
        case '02':
            hasilSplit[1] = 'Februari'
            break
        case '03':
            hasilSplit[1] = 'Maret'
            break
        case '04':
            hasilSplit[1] = 'April'
            break
        case '05':
            hasilSplit[1] = 'Mei'
            break
        case '06':
            hasilSplit[1] = 'Juni'
            break
        case '07':
            hasilSplit[1] = 'Juli'
            break
        case '08':
            hasilSplit[1] = 'Agustus'
            break
        case '09':
            hasilSplit[1] = 'September'
            break
        case '10':
            hasilSplit[1] = 'Oktober'
            break
        case '11':
            hasilSplit[1] = 'November'
            break
        case '12':
            hasilSplit[1] = 'Desember'
            break
        default :
            'Bulan Invalid'
            break

    }
    console.log(hasilSplit[1]);
    hasilSplit2.sort(function(a,b){return Number(a)<Number(b)})
    //split
    console.log(hasilSplit2)
    //join
    console.log(hasilSplit3.join('-'))
    //slice
    console.log(data[1].slice(0,15))
}
dataHandling2(input)

   

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */