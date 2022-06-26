// const arr = [12, 22, 33, 54]

// for(let i = 0; i < arr.length; i++){
//     console.log(`Index ${i} = ${arr[i]}`)

// }

// function createIterator(collection){
//     let i = 0;
//     return{
//         next(){
//             return{
//                 done: i >= collection.length,
//                 value: collection[i++]
//             }
//         }
//     }
// }

// let iterate = createIterator(arr);
// console.log(iterate)
// console.log(iterate.next())
// console.log(iterate.next())
// console.dir(iterate.next)
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())


// *******_____Iterator function for javascript_____***?

//console.log(arr[Symbol.iterator])

//let iterate = arr[Symbol.iterator]()
// const str ="Hello"
// const iterate = str[Symbol.iterator]()
// console.log(iterate)
// console.log(iterate.next())
// console.log(iterate.next())
// console.dir(iterate.next)
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())

// for( let v of arr){
//     console.log(v)
// }

// for(let v of 'Hello'){
//     console.log(v)
// }

// const obj ={
//     a: 11,
//     b: 12
// }

// // for(let i of obj){
// //     console.log(i)
// // }
// for(let i in obj){
//     console.log(i)
// }

// let obj ={
//     start : 1,
//     end : 5,
//     // [Symbol.iterator]:function(){

//     //     let currentValue = this.start
//     //     const self = this
//     //     return {
//     //         next(){
//     //             return {
//     //                 done : currentValue>self.end,
//     //                 value :currentValue> self.end?undefined : currentValue++
//     //             }
//     //         }
//     //     }
//     // }
//     [Symbol.iterator]:function* (){
//         let currentValue = this.start;
//         while(currentValue<this.end){
//             yield currentValue++

//     }
// }

// }

// let iterate = obj[Symbol.iterator]()

// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next)
// console.log(iterate.next())
// console.log(iterate.next())

// function* generate(){
//     yield 1
//     yield 2 
//     yield 3
// }

//  function* generate(collection){
//     for(let i = 0; i < collection.length; i++){
//         yield collection[i] 
//     }
//  } 

// let iterate = generate(arr)
// console.log(iterate)
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())

// ***____Set in javascript_____*****?

//let set = new Set([1, 2, 3, 4]);

// set.add('a')
// set.add('Hello')
// set.add(1)
// set.add(2)
// set.add(11)
// //set.clear()
// set.delete('Hello')
// console.log(set.has('a'))
// console.log(set)
// console.log(set.size)
// console.log(set.keys())
// console.log(set.values())

// let keyIterate = set.values()
// let keyIterate = set.keys()
// console.log(keyIterate.next())
// console.log(keyIterate.next())
// console.log(keyIterate.next())
// console.log(keyIterate.next())
// console.log(keyIterate.next())

// function isIterable(obj){
//     return typeof obj [Symbol.iterator]==='function'
// }
// console.log(isIterable(set))
// for(let v of set){
//     console.log(v)
// }
// console.log(set.entries())


 //****____Map in javascript_____***?
//  let map = new Map([
//     ['a',10],
//     ['b',20],
//     ['c', 30],
//     ['d', 40]
//  ])
//  map.set('Hello','sobuj')
//  map.set('a',100)
//  map.set('f',100)
//  map.delete('Hello')
//  console.log(map)
//  console.log(map.size)
//  console.log(map.get('c'))
//  console.log(map.values())
//  console.log(map.keys())
//  console.log(map.entries())
 //map.set({name:'SR sobuj'},99)
// console.log(map)

// for(let  v of map){
//     console.log(v)
// }

// for(let [v,k] of map){
//     console.log(v,k)
// }

//map.forEach((v,k) => console.log(v,k))
 

// ***____ WeaK Set in javascript_____*****?

// let a =  {a:10}, b = {b:20},c={c:40}
// let set = new Set([a,b])
// a = null
// console.log(set)
// let arr = [...set]
// console.log(arr)
// console.log(arr.length)
// console.log(arr[0])


// let a =  {a:10}, b = {b:20}
// let weakSet = new WeakSet([a,b])
// a = null

// weakSet.add({c:10})
// console.log(weakSet)

// console.log(weakSet.has(a))
// console.log(weakSet.has(b))

// let weakMap = new WeakMap([[a,23],[b,34],[c,45 ]])
//let a={a:10}, b={}, c={}, d={}

//let weakMap = new WeakMap([[a,50],[b,30],[c,500]])
//a = null
//console.log(weakMap)
//console.log(weakMap.has(a))
//console.log(weakMap.get(a))
//console.log(weakMap.has(b))

// *****____Class in javascript_____***?

// function rectangle(height,width){
//     this.height =height;
//     this.width = width;
// }

// rectangle.prototype.Draw =function(){
//     console.log('Drawing...')
// }

// let rect1= new rectangle(33,55)
// rect1.Draw()
// console.log(rect1)

// class Rectangle {
//     constructor(width,height){
//         this.width = width;
//         this.height = height;
//         this.AnOther = function(){
//             console.log('AnOther');
//         }
//     }
//    name = 'SR sobuj'
   
//     Draw(){
//         console.log(this)
//         console.log("I am drawing a picture!")
//     }

  
// }

// let rect2 = new Rectangle(22,44)
// //console.log(rect2)
// rect2.Draw()

//'use strict';

// class Person{
//     constructor(name,email){
//         this.name = name;
//         this.email = email;
//     }
//     print(){
//         console.log(this.name, this.email)
//     }

//     test(){
//         console.log(this)
//     }

//     static create(str){
//         let person = JSON.parse(str)
//         return new Person(person.name, person.email)
    
//     }


// }

// let st = '{"name": "SR Sobuj", "email":"srsobu010@gmail.com"}'

// let p2= Person.create(st)
// console.log(p2)
// p2.print()
// console.log(p2 instanceof Person)
//'use strict';
// function Shape(){
//     this.Draw= function(){
//         console.log(this)
//     }
// }

// let s1 = new Shape()
// let anotherDraw = s1.Draw
// s1.Draw()
// anotherDraw()

// let p =new Person('SR Sobuj', 'srsobu010@gmail.com')

// let t1 = p.test
// console.log(t1)
// t1()

// ***___Private data with Symbol in javascript_____**?

// const  _radious = Symbol()
// const  _name = Symbol()
// const  _draw = Symbol()
// class Circle {
//     constructor(radious, name){
//         this[_radious] = radious;
//         this[_name] = name;
//     }

//     [_draw](){
//         console.log("drawing your circle!")
//     }
// }

// let c1 = new Circle(4,' green circle')

// console.log(c1)
//c1.draw()

// console.log(Object.getOwnPropertyNames(c1))
// console.log(Object.getOwnPropertySymbols(c1)[1])
// let key = Object.getOwnPropertySymbols(c1)[1]
// console.log(c1[key])


// ***___Private data with WeakMap in javascript_____**?
// const  _radious = new WeakMap();
// const  _name = new WeakMap();
// const  _draw = Symbol()

// const _resize = new WeakMap();
// class Circle {
//     constructor(radious, name){
//         this.size = 100
//         _radious.set(this,radious)
//         _name.set(this,name)
//         _resize.set(this, ()=>{
//             console.log(this.size)
//             console.log(this)
//         })
//     }

//     draw(){
//         console.log("drawing your circle!")
//         _resize.get(this)()
//     }

//     // getRadious(){
//     //   return _radious.get(this)
//     // }
//     get radious(){
//       return _radious.get(this)
//     }

//     set radious(v){
//       _radious.set(this,v)

//     } 
//     getNamed(){
//       return _name.get(this)
//     }
// }

// let c1 = new Circle(4,' green circle')

// //console.log(c1)
// //console.log(c1.name)// undefined
// //c1._resize()
// c1.draw() 
// c1.radious=100
// console.log(c1.radious)
// console.log(c1.getNamed())

// let a= 5;
// let b = 5
// let remainder = a%b;
// console.log(remainder)

// This a websites Programming problems
// function giveMeSomething(a) {
//     //console.log("hi " +a)
//     let str = "something " +a
//     return `\"${str}\"`
//   }

// let r =giveMeSomething("hi ")
// console.log(r)


// class Shape {
//   constructor(color){
//     this.color = color;
//   }

//   draw(){
//     console.log(" I am drawing of new something...")
//   }
// }


// class Rectangle extends Shape{
  
//   constructor(color,height, width){
//     super()
//     this.height = height;
//     this.width = width;
//   }

//   calculateArea(){
//     return .5* this.height*this.width;
//   }
//   draw(){
//     console.log(" I am drawing of new Rectangle...")
//   }
// }


// *****____Modules system in javascript_____**?

// import Shape from "./Shape"
// import Rectangle from "./Rectangle"

// let r = new Rectangle('Green',4,5)
// console.log(r)
// console.log(r.calculateArea())
// r.draw()

// // import * as func from "./func"

// // console.log(func.add(4,4))
// // console.log(func.sub(4,4))
// // console.log(func.multiply(4,4))
// // console.log(func.div(4,4))
// // console.log(func.mod(4,4))

// import * as f from "./func"
// console.log(f.add(100,100))

// import {div, mod} from "./func"
// console.log(div(20, 4))
// console.log(mod(11,7))

//***___Javascript error handling ***?

//let n = 100;

// if(n > 5){
//   console.log('n is greater than 5')
// }else{
//   console.log("n is less than 5")
// }

// if(n > 5){
//   throw new Error('n is greater than 5');
// }


// if(2.7976931348623157e+308 > 1.7976931348623157e+308){
//   throw new Error('validError')
// }

// let n = Number.parseInt('4.66')
// let n1 = Number.parseInt('4.66ss')
// let n2 = Number.parseInt('4.66ss3')
// let n3 = Number.parseInt('s4.66ss')
// console.log(n, n1, n2, n3) 

// function changeToInt(v){

//   let result = Number.parseInt(v)

//   if (!result){
//     return  "Please Provide a value which is able to convert in Integer!"
    
    
//   }
//   return result
// }

// //console.log(changeToInt('sobuj'))
// // let rs = changeToInt("44")
// // console.log(rs)
// let rs = changeToInt("ee44")
// console.log(rs)
// let rs1 =changeToInt(7.3423)
// console.log(rs1)

// ***___Try catch error handling in javascript_____**?

// function makeWords(test){
//   // let str = test.trim()
//   // let words = str.split(" ")
//   // return  words;
//    try{
//      let str = test.trim()
//      let words = str.split(" ")
//      return  words;

     

//    }catch(e){
//      //console.log(e.message)
//     //console.dir(e)
//     console.log("Please Provide a valid string");

//    }

// }

// // let word = makeWords('     Hello, I am Sanvir Rahman Sobuj')
// // console.log(word);

// let word = makeWords(883)
// console.log(word);

// class CustomError extends Error{
//   constructor(msg){
//     super(msg);
//     if(Error.captureStackTrace){
//       Error.captureStackTrace(this,CustomError)
//     }
//   }
// }
// try{

//   console.log(" I am try line 1")
//   console.log(" I am try line 2")
//   throw new CustomError("I am Getting CustomError")
//   console.log(" I am try line 3")

// }catch (e){
//   console.dir(e)

// }finally{
//   console.log(" I am done");
// }

//console.log(" I am done");
import './lessons/lesson2.js'
import './lessons/lessonAjax.js'
import './lessons/callBackwithajax.js'
import './lessons/fetchApi.js'
//import './lessons/promiseApi.js'
//import './lessons/asynAwait.js'
import './lessons/domLesson1.js'