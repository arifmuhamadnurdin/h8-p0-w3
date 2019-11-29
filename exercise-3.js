var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ]
// function dataHandling () {
    for (var i = 0; i < input.length; i++) {
        // get the size of the inner array
        var innerArrayLength = input[i].length;
        // loop the inner array
        for (var j = 0; j < innerArrayLength; j++) {
            
            for(i==0 && j==0; i<input.length; i++){
                console.log('Nomor Id :'+input[i][j])
            }
            for(i==1 && j==1; i<input.length; i++){
                console.log('Nama :'+input[i][j])
            }
        // console.log('[' + i + ',' + j + '] = ' + input[i][j]);
        }
}
           