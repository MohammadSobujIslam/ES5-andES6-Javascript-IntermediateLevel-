
// var rect = {
//     Height : 20,
//     width : 89,
//     Area : function(){
//         console.log('My area is ', this.Height * this.width)
//     },
//     Draw : function(){
//         console.log('I am a rectangle')
//         this.PrintProperties()
        
        
//     },
//     PrintProperties : function(){
//         console.log("My rectangle height is ", this.Height)
//         console.log("My rectangle width is ", this.width)
//         console.log(this)
//     }
// }

// rect.Area()
// rect.Height = 300
// rect.Area()
// rect.Draw()

// //alert("Hi window features!")

// rect.Height = 233
// rect.Draw()

// rect.Area()

// function Myfunc(){
//     console.log(this)
// }

// Myfunc()

// new Myfunc()

// console.log('Global scope this keyword works')

// console.log(this)
// function Square(a, c){
//     var result = a * c
//     console.log(result)
//     console.log(this)
//     rect.Draw()
// }


// new Square()


//*************_____  Factory Pattern in JavaScript_____******? 
// var CreateRect = function(height,width){
//     return {
//         Height : height,
//         width : width,
      
//         Draw : function(){
//             console.log('I am a rectangle')
//             this.PrintProperties()
            
            
//         },
//         PrintProperties : function(){
//             console.log("My rectangle height is ", this.Height)
//             console.log("My rectangle width is ", this.width)
//             console.log(this)
//         }
//     }
    
// }

// var rect1 = CreateRect(4,6)

// rect1.Draw()
//rect1.PrintProperties()

//*************_____  Constructor pattern in JavaScript_____******? 


// var rectangle_create = function(height,width){
    
//     this.a = height
//     this.width = width
//     this.Draw  = function(){
//         console.log('I am a rectangle')
//         this.PrintProperties()
        
        
//     }
//     this.PrintProperties = function(){
//         console.log("My rectangle height is ", this.a)
//         console.log("My rectangle width is ", this.width)
//         console.log(this)
//     }

// }

// var reat_one = new rectangle_create(5,23)

// reat_one.Draw()

//*****_____New keyword in JavaScript_____********?
// function mYNewKeyword(Constructor){
//     var ovj = {}
//     Object.setPrototypeOf(ovj, Constructor.prototype)
//     var argsArray = Array.prototype.slice.apply(arguments)
//     Constructor.apply(ovj, argsArray.slice(1))
//     return ovj
// }

// var rect4 = mYNewKeyword(rectangle_create,23,5)

// rect4.Draw()
// rect4.PrintProperties()

// var ovj1={}
// var ovj2 = new Object()
// var str = String('something')
// console.log(str)
// var str1 = new String('How to say')
// console.log(str1)
// console.log(str1 + ' you')


// JavaScript a function ekta object

// function test(){
//  console.log("function  a Object")
// }
// test()
// console.log(test.constructor)
// console.log(test.name, test.length)


// // Another way to proved function is a Object in javascript

// var rect_create = new Function('height','width', `this.a = height
// this.width = width
// this.Draw  = function(){
//     console.log('I am a rectangle')
//     this.PrintProperties()
    
    
// }
// this.PrintProperties = function(){
//     console.log("My rectangle height is ", this.a)
//     console.log("My rectangle width is ", this.width)
//     console.log(this)
// }`) 

// var rect5 = new rect_create(3,5)

// rect5.Draw()
// rect5.PrintProperties()


// call , apply
// bind


// function Myfunc(){
//     console.log(this)
//     console.log(this.a + this.c)

// }


// Myfunc()

// Myfunc.call({})
// Myfunc.call({a:4, c:6})

// Myfunc.apply({})
// Myfunc.apply({a:5, c:5})

// function myTest(x,y){
//     console.log(this)
//     console.log(this.a + this.c + x + y)

// }
// // Defferenced between call and apply methonds
// myTest.call({a: 5, c:5},5,5)
// myTest.apply({a:5, c:5},[10,10])

// // bind method works
// myTest.bind({a: 5, c:5}, 20, 20)()

// var bind_store = myTest.bind({a: 5, c:5}, 20, 20)

// bind_store()


// pass by value vs pass by reference
// call by value vs call by reference


// var n = 10

// function change(n){
//     n = n + 100
//     console.log(n)
// }
// change(n) // pass by value

// console.log(n)

// var obj = {
//     a : 10,
//     c: 20
// }

// function changeObject(obj){
//     obj.a = obj.a +100
//     obj.c = obj.c + 100
//     console.log(obj)
// }

// changeObject(obj)
// console.log(obj)


// var rectangle = function(height,width){
//     this.height = height
//     this.width = width

//     this.Draw = function(){
//         console.log("I am rectangle")
//         this.PrintProperties()
//         console.log(this)

//     }
//     this.PrintProperties = function(){
//         console.log('rectangle height is ', this.height)
//         console.log('rectangle width is ', this.width)
//     }
// }

// var rect1 = new rectangle(4, 9)

// rect1.Draw()

// rect1.PrintProperties()

// var rectangle = function(height,width){
  

//     var position = {
//         x : 46,
//         y : 88
//     }
//     this.height = height
//     this.width = width
   
//     var PrintProperties = function(){
//         console.log('rectangle height is ', this.height)
//         console.log('rectangle width is ', this.width)
//     }.bind(this)

//     // this.getPosition = function(){
//     //     return position
//     // }

 

     
//     this.Draw = function(){
//         console.log("I am rectangle")
//         PrintProperties()
//         console.log('position x = ', position.x , 'position y = ', position.y)


//     }

//     Object.defineProperty(this, 'position',{
//         get : function(){
//             return position
//         },
//         set : function(value){
//             position = value
//         }
//     })
// }

// var rect2 = new rectangle(3, 5)

// // rect2.Draw()
// // console.log(rect2.position)
// rect2.position = {
//     x : 100,
//     y : 200
// }
// console.log(rect2.position)
// console.log(rect2.position)


// function person(name){
//     this.name = name
// }

// var p1 = new person('Sanvir Rahman Sobuj')
// console.log(p1)
// var p2 = new person('Afsana Rahman')
// console.log(p2)

// console.log(p1.__proto__ == p2.__proto__)

// var person = {
//     name :  'SR Sobuj'
// }
// console.log(person)
// for(var i in person){
//     console.log(i)
// }

// console.log(Object.keys(person))
// var descriptor = Object.getOwnPropertyDescriptor(person, 'name')
// console.log(descriptor)
// let baseObj = Object.getPrototypeOf(person)
// console.log(baseObj)
// var descriptor_again = Object.getOwnPropertyDescriptor(baseObj, 'toString')
// console.log(descriptor_again)
// for(var i in baseObj){
//     console.log(i)
// }

// Object.defineProperty(person, 'name',{
//     configurable : false,
//     enumerable : false,
//     writable : false,
//     value : "Afsana Rahman Sobuj"
// })
// for(var i in person){
//     console.log(i)
// }
// console.log(person)
// console.log(person.name)


// function person (name){
//     this.name = name
// }
// person.prototype.roll = 10699
// var p1 = new person('SR Sobuj')
// var p2 = new person('Afsana rahman')
// console.log(p1)
// console.log(p2)
// console.log(p1.__proto__)
// console.log(Object.getPrototypeOf(p1))
// console.log(Object.getPrototypeOf(p1)== p1.__proto__)
// console.log(person.prototype)
// console.log(p1.prototype)
// console.log(Object.getPrototypeOf(p1)== person.prototype)
// console.log(Object.getPrototypeOf(p1)== person.prototype == Object.getPrototypeOf(p2))
// console.log(person.prototype== Object.getPrototypeOf(p2))

// var obj = {}
// console.log(obj)
// person.prototype.character = 'Good'
// Object.prototype.color = 'white'
// console.log(obj)
// let obj1 = {}
// console.log(obj1)

// let a= [3]
// var arr = []

// Array.prototype.myMethod = function ourAllArray(){

// }
// a.prototype = 33

// console.log(a)

// console.log(arr)
// var arr1 =[]
// console.log(arr1)

// function funcName(name){
//     console.log(name)
// }

// var N1 = new funcName('tina')
// var N2 = new funcName('Mina')
// funcName.prototype.addExtraProperty = 'all right'
// console.log(N1, N2)
// function anotherfunc (num){
//     console.log(num)
// }
//  var A1 = new anotherfunc(4)
//  console.log(A1)

//  var obj = {
//      name : 'Sobuj'
//  }

//  obj.prototype = 'Afsana'
//  console.log(obj)

// function Square( width, height){
//     this.width = width
//     this.height = height
//     this.getAccessPrototyMethod =function(){
//         console.log('Here is a square widht = ' + this.width)
//         console.log('Here is a square height = ' + this.height)
//         //this.Draw()
//     }
   

// }

// Square.prototype = {
//  Draw: function(){
//      this.getAccessPrototyMethod()
//         console.log('Area of square = ' , this.height * this.width)
//     },
//     toString: function(){
//         // console.log('Afsana')
//         return 'Anika'
//     }
// }

// var s1 = new Square(40, 40)
// var s2 = new Square(35,35)
// console.log(s1)
// s1.Draw()
// console.log(s1.hasOwnProperty('width', 'height'))
// console.log(Object.keys(s1))
// for(var i in s1){ 
//         console.log(i)
// }
/* for in loop accesssed instance and prototype members
         So, we are need  all members accessed using this method.
         hasOwnProperty and Object.keys(s1) accessed only instance
         members.*/


//console.log(s2)

// console.log(s1.getAccessPrototyMethod())
//s1.getAccessPrototyMethod()

//console.log(s1.toString())
// // ******_____ This system is not properly works for Object___******?
// var Obj = {}

// Obj.prototype = {
//     name : ' Afsana',
//     anotherName : 'nusrat rahman',
//     onemore_namr : 'jannatul nayem'

// }
// console.log(Obj)


//  ******_____ Prototypical Inheritance in JavaScript Most important ___******?

// function Square(width){
//     this.width = width;

// }

// Square.prototype ={
//     Draw :function(){
//         console.log('I am Draw function')
//     },
//     Common : function(){
//         console.log('I am Common everWhere')
//     }
// }

// var sqr = new Square(11)
// console.log(sqr)


// function Circle(radious){
//     this.radious = radious
// }

// Circle.prototype = {
//     Common : function(){
//         console.log('I am Common everWhere')
//     }
// }

// var crl = new Circle(12)
// console.log(crl)

// Upper prototype inheritance General using but it is not a smart solution

// Now we are try to smart solution

//sqr -> Square -> Object
// crl -> Circle -> Object
// sqr -> Square -> shape -> Object (this is our main concept)

// function Shape(){

// }

// Shape.prototype ={
//     Common : function(){
//         console.log('I am Common everWhere')
//     }
// }

// function Square(width){
//     this.width = width;

// }
// Square.prototype = Object.create(Shape.prototype)

// Square.prototype.Draw = function(){
//         console.log('I am Draw function')
//     }


// var sqr = new Square(11)
// console.log(sqr)
// sqr.Common()
// sqr.Draw()

// function Circle(radious){
//     this.radious = radious
// }

// Circle.prototype = Object.create(Shape.prototype)

// Circle.prototype.DesignCircle = function(){
//     console.log('Here is a Circle Draw')
// }

// var crl = new Circle(12)
// console.log(crl)
// crl.Common()
// crl.DesignCircle()

// Reset Constructor after prototype inheritance and solution this problem.

// function Shape(){

// }

// Shape.prototype.Common = function(){
//         console.log('I am Common everWhere')
//     }

// var shp = new Shape()
// console.log(shp) 
// var shp2 = new Shape.prototype.constructor()
//  console.log(shp2)   


// function Square(width){
//     this.width = width;

// }
// Square.prototype = Object.create(Shape.prototype)
// Square.prototype.constructor = Square

// Square.prototype.Draw = function(){
//         console.log('I am Draw function')
//     }
// All reset cconstructor this system
// Square.prototype = {
//     test : function(){
//         console.log('I am test Square function')
//     }
// }    


// var sqr = new Square(111)
// console.log(sqr)

// var sqr2 = new Square.prototype.constructor(100)
// console.log(sqr2)



//sqr.Common()
//sqr.Draw()

// function Circle(radious){
//     this.radious = radious
// }

// Circle.prototype = Object.create(Shape.prototype)

// Circle.prototype.DesignCircle = function(){
//     console.log('Here is a Circle Draw')
// }

// var crl = new Circle(12)
// console.log(crl)
// crl.Common()
// crl.DesignCircle()


// Supper call in javascript using call method

// function extendclassobject (child, parent){
//     child.prototype = Object.create(parent.prototype)
//     child.prototype.constructor = child
// }

// function Shape(color,dimention){
//     this.dimention = dimention
//     this.color = color
// }

// Shape.prototype.Common = function(){
//         console.log('I am Common everWhere')
//     }

// var shp = new Shape('Green')
// console.log(shp) 


// function Square(width, color, height,dimention){
//     this.height = height
//     Shape.call(this, color,dimention)
//     //Shape(color) // this syntax  refer window Object
//     this.width = width;

// }
// Square.prototype = Object.create(Shape.prototype)
// Square.prototype.constructor = Square

// extendclassobject(Square, Shape)

// Square.prototype.Draw = function(){
//         console.log('I am Draw function')
//     }

// var sqr = new Square(111, 'Mr. Green = Sobuj',222,2)
// console.log(sqr)


// sqr.Common()
// sqr.Draw()
// function Circle(radious,color,dimention){
//     Shape.call(this,color,dimention)
//     this.radious = radious
// }

// Circle.prototype = Object.create(Shape.prototype)
// extendclassobject(Circle, Shape)

// Circle.prototype.DesignCircle = function(){
//     console.log('Here is a Circle Draw')
// }

// var crl = new Circle(12, 'red', 2)
// console.log(crl)
// crl.Common()
// crl.DesignCircle()


// *****_________Method Overrides in javascript_________*********?

// function extendclassobject (child, parent){
//     child.prototype = Object.create(parent.prototype)
//     child.prototype.constructor = child
// }

// function Shape(color,dimention){
//     this.dimention = dimention
//     this.color = color
// }

// Shape.prototype.Common = function(){
//         console.log('I am Common Method everWhere')
//     }

//     function Square(width, color, height,dimention){
//         this.height = height
//         Shape.call(this, color,dimention)
//         this.width = width;
    
//     }    
//     extendclassobject(Square, Shape)

//     Square.prototype.Common = function(){
//         console.log('I am calling from Square and I have Common method Overridden')
//         //Shape.prototype.Common.call(this)
//     }

//     Square.prototype.Draw = function(){
//             console.log('I am Draw function')
//         }
    
//     //var sqr = new Square(111, 'Mr. Green = Sobuj',222,2)
//     // console.log(sqr)    
   

//     var sqr = new Square(111, 'Mr. Green = Sobuj',222,2)
//     //  console.log(sqr)


//     // sqr.Common()
//     //   sqr.Draw()
// function Circle(radious,color,dimention){
//     Shape.call(this,color,dimention)
//     this.radious = radious
// }
// extendclassobject(Circle, Shape)
    
//     Circle.prototype.Common = function(){
//         console.log('I am calling from Circle and I have Overridden common method')
//         //Shape.prototype.Common.call(this)
//     }

//     Circle.prototype.DesignCircle = function(){
//         console.log('Here is a Circle Draw')
//     }
    
//     var crl = new Circle(12, 'red', 2)
//     // console.log(crl)
//     //crl.Common()
//     // crl.DesignCircle()

//     var s = new Shape('Blue', 2)

//     var shapes = [s,sqr,crl]

//     for(var i of shapes){
//         i.Common()
//     }

//     // for(var i in sqr){
//     //     console.log(i)
//     // }
// // *******_________Class instance Object checking system_____::?
//  console.log(sqr instanceof Shape)
//  console.log(sqr instanceof Square)


 // **********_______Mixin and Composition in javascript______*********:
  

 function mixin(target, ...sources){// restOperators
     Object.assign(target.prototype, ...sources)// SpreadOperator
 }
 var canWalk ={
     Walk: function(){
         console.log("I walking...")
     }
 }

 var canEat = {
     Eat : function(){
         console.log('I eating...')
     }
 }
 var canSwiming = {
    swim:function(){
        console.log('I Swiming...')
    }
}

//  var persons = Object.assign({}, canWalk,canEat)
//  persons.name = 'SR Sobuj'
//  console.log(persons)
//  console.log(persons.Eat())

// function composition in javascript

var Person = function(name){
    this.name = name
}

// Object.assign(Person.prototype, canEat,canWalk)
mixin(Person, canEat, canWalk)

var person = new Person('SR Sobuj')
console.log(person)
// person.Walk()
// person.Eat()
var GoldFish = function(name){
    this.name = name
}

mixin(GoldFish, canEat, canWalk,canSwiming)
var fish = new GoldFish('RedChainess fish')
console.log(fish)
fish.swim()
