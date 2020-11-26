//Promise 1
const search = (char) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const name = [
                'Abigail', 'Alexandra', 'Alison',
                'Amanda', 'Angela', 'Bella',
                'Carol', 'Caroline', 'Carolyn',
                'Deirdre', 'Diana', 'Elizabeth',
                'Ella', 'Faith', 'Olivia', 'Penelope']
            let hasil = []
            char = char.toLowerCase()
            name.forEach(newName => {
                a = newName.toLowerCase()
                if(a.includes(char) === true){
                    hasil.push(newName)
                }
            })
            if(hasil.length !== 0){
                resolve(hasil)
            } else{
                reject(new Error (`Nama dengan keyword '${char}' tidak tersedia`))
            }
        }, 2000)
    })
}

let searching = (input) => {
search(input)
    .then((res) => {console.log(res)})
    .catch((error) => {console.log(error)})
}
searching('EL')

//=========================================================================================

//Promise 2
let slicing = (n) => {
    return new Promise ((res, rej) => {
        setTimeout (() => {
            const data = [ 'Angela', 'Bella', 'Elizabeth', 'Ella', 'Penelope' ]
            let sorting = data.sort()
            let potong = sorting.slice(0,n)
            if(n <= data.length){
                res(potong)
            } else {
                rej(new Error(`Nilai n harus kurang dari sama dengan jumlah dataArray (5) !`))
            }
        }, 3000)
    })
}

let slicee = (pot) => {
    if (typeof(pot) !== 'number'){
        console.log("Nilai n harus berupa 'number'")
    } else {
    slicing(pot)
        .then((res) => {console.log(res)})
        .catch((error) => {console.log(error)})
}
}
slicee(3)