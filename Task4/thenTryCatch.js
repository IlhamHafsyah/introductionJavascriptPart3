const cekHariKerja = (day) => {
    return new Promise ((resolve, reject) =>{
        setTimeout (() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if (cek){
                resolve(cek)
            } else {
                reject(new Error ('Hari ini bukan hari kerja'))
            }
        }, 3000)
    })
}

let checking = (hari) => {
if(typeof(hari) !== 'string'){
    console.log('Mohon masukkan nama hari dalam tipe data string')
} else {
    hari = hari.toLowerCase()
//then catch
    cekHariKerja(hari)
    .then((res) => {console.log(`Sekarang hari ${res}, saatnya bekerja !`)})
    .catch((err) => {console.log(err)})

//try catch
    async function check() {
     try {
          let result = await cekHariKerja(hari)
          await showHariKerja(`Sekarang hari ${result}, saatnya bekerja !`) 
          } catch (error) {
        console.log(error)
        }
    }
    function showHariKerja(result) {
        return console.log(result)
    }
    check()
}
}
checking("RABU")

/*then-catch digunakan untuk mengolah hasil dari promise
.then untuk hasil sukses (resolve)
.catch untuk hasil gagal (reject)*/

/*try-catch digunakan untuk mengetahui suatu fungsi berjalan atau tidak
try untuk menampung fungsi yang memiliki kemungkinan error
catch untuk menampung hasil error*/