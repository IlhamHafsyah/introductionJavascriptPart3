let getDataHobby = new Promise((resolve, reject) => {
    let success = true
    let data = ['Futsal', 'Badminton']
    if(success){
        // console.log('berhasil')
        resolve(data)
    } else {
        // console.log('gagal')
        reject(new Error('Gagal mengambil data !'))
    }
})

getDataHobby.then((result) => {
// bisa ditambahkan proses apapun disini
console.log(result)
}).catch((error) => {
console.log(error)
})

// RESOLVE => THEN jika kondisi berhasil
// REJECT => CATCH jika kondisi gagal


// let getDataHobby2 = () => {
//     let success = true;
//     let data = ["Futsal", "Badminton"];
//     if (success) {
//       return data;
//     } else {
//       return new Error("Gagal Mengambil Data !");
//     }
//   };
//   console.log(getDataHobby2());
  