// //proses1
// console.log('Hello process 1')

// //proses2
// setTimeout(() => {
//     console.log('Hello process 2 after 2000ms')
// }, 2000)

// //proses3
// console.log('Hello process 3')

//=============================================
// proses1
// let r = 7
// let phi = null
// console.log('proses deklarasi berjalan')

// // proses2
// setTimeout(() => {
//     console.log('sedang mencari nilai phi')
//     if(r % 7 === 0) {
//         phi = 22/7
//     } else {
//         phi = 3.14
//     }
//     console.log(`nilai phi = ${phi}`)
// }, 2000)

// // proses3
// console.log(`Hasil luas lingkaran adalah ${phi*r*r}`)


//handle async dengan callback
const hitungLuasLingkaran = (callback) => {
    // proses1
    let r = 7
    let phi = null

    //proses2
    setTimeout(() => {
        console.log('sedang mencari nilai phi')
        if(r % 7 === 0) {
            phi = 22/7
        } else {
            phi = 3.14
        }
        console.log(`nilai phi = ${phi}`)
        callback(phi, r)
    }, 2000)
    
}
hitungLuasLingkaran((phi, r) => {
// proses3
console.log(`Hasil luas lingkaran adalah ${phi*r*r}`)
})