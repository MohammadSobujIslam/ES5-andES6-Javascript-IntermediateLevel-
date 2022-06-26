

//******************************* */
// const xhr = new XMLHttpRequest();
// xhr.open('get','https://jsonplaceholder.typicode.com/users')
// xhr.onreadystatechange =function(e){
//     if(xhr.readyState === 4 ){
//         if(xhr.status === 200){
//             let users = JSON.parse(xhr.response)
//             console.log(users)
//         }else{
//             console.log(xhr.status)
//         }
//     } 
// }


//******************************* */

// xhr.send()

// function getRequest(url, callback){
//     const xhr = new XMLHttpRequest();
// xhr.open('get',url)

// xhr.onreadystatechange =function(e){
//     if(xhr.readyState === 4 ){
//         if(xhr.status === 200){
//             let responses = JSON.parse(xhr.response)
//             callback(null, responses )
//         }else{
//            callback(xhr.status,null)
//         }
//     }
// }

// xhr.send()
     
// }

//******************************* */
// getRequest(function(){
//     getRequest(function(){
//         getRequest(function(){
//             getRequest(function(){
//                 getRequest(function(){
//                     getRequest(function(){
//                         getRequest(function(){
        
//                         })
//                     })
//                 })
//             })
//         })
//     })
// })

//******************************* */
// const  BASE_URL = 'https://jsonplaceholder.typicode.com'

// let res =fetch(`${BASE_URL}/users/1`)
// //console.log(res)

// fetch(`${BASE_URL}/users/1`)
// .then(res=>res.json())
// .then(data => {
//     console.log(data)
//     return Promise.resolve("Something")
// })
// .then(str=>{
//     console.log(str)
//     return Promise.resolve("Another Promise")
// })
// .then(another => {
//     console.log(another)
// }) 
// .catch(e => {
//     console.log(e)
// })


//******************************* */

// const  BASE_URL = 'https://jsonplaceholder.typicode.com'
// function getRequest(url, callback){
//     const xhr = new XMLHttpRequest();
// xhr.open('get',url)

// xhr.onreadystatechange =function(e){
//     if(xhr.readyState === 4 ){
//         if(xhr.status === 200){
//             let responses = JSON.parse(xhr.response)
//             callback(null, responses )
//         }else{
//            callback(xhr.status,null)
//         }
//     }
// }

// xhr.send()
     
// }


// function getRequest(url){
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open('get',url)
        
//         xhr.onreadystatechange =function(e){
//             if(xhr.readyState === 4 ){
//                 if(xhr.status === 200){
//                     let responses = JSON.parse(xhr.response)
//                     resolve(responses)
//                 }else{
//                    reject(new Error("Error Occured"))
//                 }
//             }
//         }

//         xhr.send()
//     })
// }

// // let res = getRequest(`${BASE_URL}/users/1`)
// // console.log(res)
// getRequest(`${BASE_URL}/users/144`)
// .then(data =>{
//     console.log(data)
// })
// .catch(err =>{
//     console.error(err)
// })