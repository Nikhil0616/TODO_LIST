// 1.ways to print in JavaScript
// console.log("Hello wolrd")
// document.write("this is document write");

// 2.JavaScript console API
console.log("Hello wolrd", 4 + 6, "Another log");
console.warn("this is warning");
console.error("This is an error");


// 3.JavaScript variables
// what are variables?- containers to store data values 
var number1 = 34;
var number2 = 56;
console.log(number1 + number2);

// 4. Data types in javaScript
// Number
var num1 = 455;
var num2 = 56.76;

// string
var str1 = "This is a string";
var str2 = "This is also a string";

// object
var marks = {
    ravi: 34,
    nike: 78,
    harry: 99.977
}
// console.log(marks)

// boolean
var a = true;
var b = false;
// console.log(a, b);

var und = undefined
// console.log(und);

var n = null;
// console.log(n);
/*
At a very level, there are two types of data types in javaScript
1. Primitive data types: undefined, null, number, string, boolean, symbol
2. Reference data types: Arrays and objects
*/
var arr = [1, 2, "nike", 4, 5]
// console.log(arr)

// Operators in JavaScript
var a = 34;
var b = 56;
console.log("The value of a +b is ", a + b);
console.log("The value of a -b is ", a - b);
console.log("The value of a *b is ", a * b);
console.log("The value of a /b is ", a / b);

// Assingment Operators
var c = b;
c += 2;
c -= 2;
c *= 2;
c /= 2;
console.log(c);
var x = 34;
var y = 56;
// console.log(x ==y);
// console.log(x >=y);
// console.log(x <=y);
// console.log(x >y);
// console.log(x <y);

// Logical Operator


// Logical and
// console.log(true && true)
// console.log(true && false)
// console.log(false && true)
// console.log(false && false)

// logical or
// console.log(true || true)
// console.log(true ||false)
// console.log(false  ||true)
// console.log(false || false)

// Logical not
// console.log(!false);
// console.log(!true);


// Function in JavaScript
// DRY =Do not repeat yourself 
function avg(a, b) {
    c = (a + b) / 2;
    return c;
}
c1 = avg(4, 6);
c2 = avg(14, 16);
// console.log(c1,c2);

// Conditionals in JavaScript

var age = 41;
if (age > 18) {
    console.log('you can drink rasna water');
}
else {
    console.log('you cannot drink  rasan water');
}
// if - else statement
// if(age >18){
//     console .log('you can drink rasan water');    
// }
// else {
//     console.log('you cannot drink rasan water');
// }
/*
age=31;
// if - else Ladder
if(age >32){
    console.log("you are not a kid")
}
else if (age >26){
    console.log("bache nahi rahe");
}
else if (age >22){
    console.log(" yes bache nahi rahe");
}
else if (age >18){
    console.log(" 18 bache nahi rahe");
}
else{
    console.log("bache rahe");
}
console.log("End of Ladder");
*/
var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// for(var i= 0;i<arr.length;i++){
//     console.log(arr[i])
// }

// arr.forEach(function(element){
//     console.log(element);
// })

// let j=0;
// const ac =0;
// ac++;
// ac =ac +1;
/*
let j = 0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j ++;
// }


do{
    console.group(arr[j]);
    j++;
}   while (j < arr.length);
*/

// let myArr =[ "Fan", "Camera", 34,null,true];
// Array method
// console.log(myArr.lenth);
// myArr.pop();
// myArr.push("nikhil")
// myArr.shift()
// const newLen = myArr.unshift("Nikhil")
// console.log(newLen);
// cons ole.log(myArr);

// String methods in javascript
let myLovelyString = "Harry is a good boy good good";
// console.log(myLovelyString.indexOf("good"))
// console.log(myLovelyString.lastIndexOf("good"))
// 
// console.log(myLovelyString.slice(1,4))
d = myLovelyString.replace("harry", "Rohan");
// 
myDate = new Date();
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());console.log(myDate.getHours());

// DOM Manipulation
let elem = document.getElementById('click');
// console.log(elem);

let elemClass = document.getElementsByClassName("container")
// console.log(elemClass);
// elemClass[0].style.background ="yellow";
elemClass[0].classList.add("bg-primary")
elemClass[0].classList.add("text-success")
// console.log(elem.innerHTML);
// console.log(elem.innerText);

// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);

tn = document.getElementsByTagName('div')
console.log(tn)
createdElement = document.createElement('p');
createdElement.innerText = "This is a created para"
tn[0].appendChild(createdElement);
createdElement2 = document.createElement('b');
createdElement2.innerText = "This is a created bold";
tn[0].replaceChild(createdElement2, createdElement);

// removeChild(element);---> removes an element

// Selecting using 
sel = document.querySelector('.container')
// console.log(sel)
sel = document.querySelectorAll('.container')
// console.log(sel)


// function clicked() {
//     console.log('The button was clicked')
// }
// window.onload = function(){
//     console.log('The document was loaded')
// }
// // Events in JavaScript

// firstContainer.addEventListener('click', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> we have clicked</b>"
//     console.log("Clicked on Container")
// })

// firstContainer.addEventListener('mouseover', function(){
//     console.log("Mouse on Container")
// })
// firstContainer.addEventListener('mouseout', function(){
//     console.log("Mouse out of Container")
// })
// firstContainer.addEventListener('mouseup', function(){
//     console.log("Mouse up when clicked on Container")
// })

// Arrow Function
// function sum(a,b){
//     return a+b;
// }
sum=(a,b)=>{
    return a+b;
}
logkaro = ()=>{
    console.log("I am your log ")
}
// setTimeout and setinterval
//  clr =setTimeout(logkaro, 5000);
//  clr=setInterval(logkaro,2000);
//  use clearInterval(clr)/clearTimeout(clr)to cancel setInterval/setTimeout

// JavaScript localStorage
// localStorage.setItem('name','nikhil')
// localStorage
// localStorage.getItem('name')

// JSON
// obj={name: "nikhil", lenght:1, a:{this:'tha"t'}}
// jso= JSON.stringify(obj);
// console.log(typeof jso)
// console.log(jso)
// parsed= JSON.parse('{"name":"nikhil","length":1,"a":{"this":"tha\"t"}}')
// console.log(parsed);


