// const delay = s => new Promise(resolve=>setTimeout(resolve, s*1000))



// delay(1).then(() => console.log("1 seconds delay"))
// delay(2).then(() => console.log("2 seconds delay"))
// delay(3).then(() => console.log("3 seconds delay"))
// delay(4).then(() => console.log("4 seconds delay"))
// delay(5).then(() => console.log("5 seconds delay"))

// let p1 = Promise.resolve("test")
// console.log(p1)

// p1.then(v => console.log(v))

// let p2 = Promise.reject("reject")
// p2.catch(err => console.log(err))


let p1 = Promise.resolve("One")
let p2 = Promise.resolve("Two")
let p3 = Promise.resolve("Three")
let p4 = Promise.resolve("Four")
let p5 = Promise.resolve("Five")

let promiseArr = [p1, p2, p3, p4, p5]

Promise.all(promiseArr).then(arr=>{
    console.log(arr)
})

let a1 = new Promise(resolve =>setTimeout(resolve, 2000,'One'))
let a2 = new Promise(resolve =>setTimeout(resolve, 3000,'Two'))
let a3 = new Promise(resolve =>setTimeout(resolve, 8000,'Three'))
let a4 = new Promise(resolve =>setTimeout(resolve, 1000,'Four'))
let a5 = new Promise(resolve =>setTimeout(resolve, 4000,'Five'))
let proArr = [a1, a2, a3, a4, a5]
Promise.all(proArr).then(arr=>{
    console.log(arr)
})

Promise.race(proArr).then(v => console.log(v))