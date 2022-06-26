//Id, Class, TagName, Name

// let title = document.getElementById('title')
// console.log(title)
// let paragraph = document.getElementsByClassName('lead')
// console.log(paragraph)
// let lists = document.getElementsByTagName('li')
// console.log(lists)
// let listItemOne = document.getElementsByName('list-item-one')
// console.log(listItemOne)

// let title = document.querySelector('#title')
// console.log(title)
// let paragraph = document.querySelector('.lead')
// console.log(paragraph)
// let paragraphs =document.querySelectorAll('.lead')
// console.log(paragraphs)
// let lists = document.querySelectorAll('li')
// console.log(lists)
// let listItemOne = document.querySelector('[name ^=list-item-one ]')
// console.log(listItemOne)

let list1 = document.getElementsByTagName("li"); // Element Node
let list2 = document.querySelectorAll("li"); //Node [Element Node, Comment]
// console.log(list1)
// console.log(list2)
console.log(list1.constructor.name);
console.log(list2.constructor.name);
let ul = document.querySelector("ul");
console.log(ul);
console.log(ul.children);
console.log(ul.childNodes);

