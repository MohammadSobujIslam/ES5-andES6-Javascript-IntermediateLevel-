// function myPromise(){
//     return Promise.resolve('Test value')
// }
// console.log(myPromise())



// async function test(){
//      return Promise.resolve('async always return Promise in javascript');
// }
// console.log(test())

// async function test(){
//    return "test"
// }
// test().then(v=>alert(v))

// let p1 = Promise.resolve("I am a Promise")

// let p1 = new Promise(resolve =>{
//     setTimeout(resolve, 5000, "test value")
// })

// async function myAsynFunc(){
//     //p1.then(v =>alert(v))
//     let v = await p1;
//     console.log("test")

// }
// myAsynFunc() 
//********************************** */
// async function fetchData(){
//     try{
//         let res = await fetch('https://jsonplaceholder.typicode.com/users')
     
//     //console.log(res)
//     // console.log(res.json())

//     let data = await res.json()
//     // console.log(data)
//     let names = data.map(v => v.name)
//     console.log(names)
//     }catch (e){
//         console.log(e.message)
//     }
      
    

// }

// fetchData()

//********************************** */

// let promise = [Promise.resolve(1),Promise.resolve(2),Promise.resolve(3),Promise.resolve(4),Promise.resolve(5),Promise.resolve(6)]

// async function promiseAll(){
//     let result = await  Promise.all(promise)
//     console.log(result)
// }

// promiseAll() 
//********************************** */

// let asyncIterable = {
//     [Symbol.asyncIterator](){
//         let i = 0;
//         return {
//             next(){
//                 if(i < 5){
//                     return Promise.resolve({
//                         value : i++,
//                         done:false
            
//                     })
//                 }else{
//                     return Promise.resolve({
//                         done: true
//                     })
//                 }
//             }
//         }
//     }
// }

// let iterate = asyncIterable[Symbol.asyncIterator]();

// (async function(){
//     // let v = await iterate.next()
//     // console.log(v)
//     console.log(await iterate.next())
//     console.log(await iterate.next())
//     console.log(await iterate.next())
//     console.log(await iterate.next())
//     console.log(await iterate.next())
//     console.log(await iterate.next())
//     console.log(await iterate.next())


// })()
// console.log(iterate)
//console.log(iterate.next())

//*****____for Await of loop in javascript____******* */

// (async function(){
//     for await (let v of asyncIterable){
//         console.log(v)
//     }
// })()

//*****____async Generator in javascript____******* */

async function* myAsyncGenerator(){
    let i = 0;
    while(true){
        if(i > 10) return
         yield await Promise.resolve(i++)
        
    }
};

(async function(){
    for await (let v of myAsyncGenerator()){
        console.log(v)
    }
})()

