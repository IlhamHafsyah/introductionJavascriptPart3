// Expression funct
// const helloWorld = async () => {
//     let result = await doAsync()
//     console.log(result)
// }

// Declaration func
async function helloWorld() {
    try {
        let result = await doAsync //result = 'Hello World', akan didapat selama 2 s
        await showAsync(result) //console.log(result) akan berjalan kurang dari 1 s
    } catch (error) {
        console.log(error)
    }
}

// function doAsync(){
//     setTimeout(() => {
//         return 'Hello World'
//     }, 2000)
// }
const doAsync = new Promise ((resolve, reject) =>{
    // let success = true
    setTimeout(() => {
        resolve('Hello World')
    }, 2000)
    setTimeout(() => {
        reject(new Error("Data Gagal diambil !"))
    }, 3000)
})

function showAsync(result) {
    return console.log(result)
}
helloWorld()