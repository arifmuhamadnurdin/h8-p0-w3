var data = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]

/* function dataHandling2(){

} */
data.splice(1,1,'Roman Alamsyah Elsharawy')
data.splice(2,1,'Provinsi Bandar Lampung')
data.splice(4,1,'Pria')
data.splice(5,0,'SMA Internasional Metro')
console.log(data)
var hasilSplit = data.split(" ", [3])
console.log(hasilSplit)