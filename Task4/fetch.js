fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(res => {
    for(const {name} of res) {
    console.log(name)
    }
})
.catch((error) => {console.log(error)})