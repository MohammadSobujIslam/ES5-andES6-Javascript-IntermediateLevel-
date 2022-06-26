let arr = [1, 2, 3, 4, 5];

// // let squrArr =arr.map(function(v){
// //     return v * v;
// // })

// let squrArr =arr.map((v) => v*v)

// console.log(squrArr)

//***___callback function in javaScript_____***?

// function add(a, b){
//     return a + b
// }

// function calculator(a, b, callback){
//     let num = a +10;
//     let num2 = b + 20;
//     return callback(num, num2);
// }

// let reusult = calculator(10, 20, add)
// console.log(reusult)

// function asyncMap(arr, cb){
//     return arr.map(v=> {
//         //setTimeout(cb.bind(null,v), 0)
//         setTimeout(()=>cb(v),0)
//     })
// }

// // let qbarr = asyncMap(arr, v => v * v *v)
// let qbarr = asyncMap(arr, v =>{
//     console.log(v)

// })

// console.log(qbarr)

// let p1 = new Promise((resolve, reject) =>{
//     setTimeout(resolve,5000, 'One');
// })

// let p2 = new Promise((resolve, reject) =>{
//     setTimeout(resolve,2000, 'Two');
// })
// // console.log(p1)
// // console.log(p2)

// p1.then((v)=>{
//     console.log(v)
// })
// p2.finally((v)=>{
//     console.log(v)
// })

// function getIphone(ispassed){
//     let promise = new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             if(ispassed){
//                 resolve("I have got My new I phone")
//             }else{
//                 reject("my father can't get my new I phone")
//             }
//         },2000)

//     })
//     return promise
// }
//************************************// */
// function getIphone(ispassed){
//      return new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             if(ispassed){
//                 resolve("I have got My new I phone")
//             }else{
//                 //reject("my father can't get my new I phone")
//                 reject(new Error("my father can't get my new I phone"));
//             }
//         },2000)

//     })

// }
//console.log(getIphone(true))
//console.log(getIphone(false))

//let p3 = getIphone(0)
// console.log(p3)
// p3.then((v)=>{
//     console.log(v)
// }).catch((e)=>{
//     console.log(e)
// })

// getIphone(false).then((v)=>{
//     console.log(v)
// }).catch((e)=>{
//     console.log(e)
// })
console.log()
