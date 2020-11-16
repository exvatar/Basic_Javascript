// let age = Number(prompt("How old are you")) , message;

// if (point=="80"){
//     message="A"
// }
// else if (point>="70"&&point<="79"){
//     message="B"
// }
// else if (point>="60"&&point<="69"){
//     message="C"
// }
// else if (point>="50"&&point<="59"){
//     message="D"
// }
// else if (point<"50"){
//     message="F"
// }

// message = (age<18) ? 2000 : 3500 ;

// alert(message);

// alert( null || 2 || undefined );
// alert( alert(1) || 2 || alert(3) );
// alert( 1 && null && 2 );
// alert( alert(1) && alert(2) );
// alert( null || 2 && 3 || 4 );



// -----------------------------------Home work-----------------------------
//1
// let age = Number(prompt("How old are you")) , message
// if (age=>18 && age<=60) {
//     message = "อยู่ระหว่าง 18-60"
// }else {
//     message = "ไม่อยู่ระหว่าง 18-60"
// }
//2
// if (-1 || 0) alert( 'first' ) //ทำ
// if (-1 && 0) alert( 'second' ) //ไม่ทำ
// if (null || -1 && 0) alert( 'third' ); //ไม่ทำ
//3
// let userName = prompt("Who are you?") , message
// let password
// if (userName==="Admin") {
//     password = prompt("Password?") 
//     if (password==="codecamp#5") {
//         message = "ยินดีต้อนรับ"
//     } else if (password === null || password === "") {
//         message = "ยกเลิก"
//     } else{
//         message = "Wrong password"
//     }
// } else if (userName === null || userName === ""){
//     message = "ยกเลิก"
// } else {
//     message = "ผมไม่รู้จักคุณ"
// }
// alert(message)

// for (let index = 2; index <= 10; index++) {
//     alert(index);
// }

// let i = 0
// while (i<3) {
//     alert(`number ${i}!`);
//     i++
// }

// let num1 = prompt("input 1")
// let num2 = prompt("input 2")

// while (num2!=num1) {
//     if (num2<num1){
//         alert("More than")
//     } else{
//         alert("Less than")
//     }
//     num2 = prompt("input 2")
// }
// alert("Correct")

// let a = +prompt('a','');
// switch (a) {
//     case 0:
//          alert(`0`);
//          break;
//     case 1:
//          alert(`1`);
//          break;
//     case 2:
//     case 3:
//          alert(`2,3`);
//          break;
//      default:
// }


// let browser = prompt(`browser`);
// if (browser===`Edge`) {
//     alert(`You've got the Edge!`);
// } else if (browser===`Chrome`||browser===`Firefox`||browser===`Safari`||browser===`Opera`) {
//     alert(`Okay we support these browser too`);
// } else{
//     alert(`We hope that this page looks ok!`);
// }

// let showMessage = function () {
//     alert('Hello World!')
//   }
  
//   /* จะไม่มีการเรียก showMessage แต่จะแสดงรายละเอียดของฟังก์ชัน */
//   alert(showMessage);
  
//   /* จะมีการเรียก showMessage() และ showMessage จะส่ง undefined ออกมาให้ alert ไปรันต่อ */
//   alert(showMessage()); 

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   ask(
//     "Do you agree?",
//     () => { alert("You agreed."); },
//     () => { alert("You canceled the execution."); }
//   );
  

// let yes = () => alert("You agreed.");
// let no = () => alert("You canceled the execution.");
// let question = "Do you agree?"

// let ask = (question,yes,no) => {
//     if (confirm(question)) yes()
//     else no();
// };

// ask(question,yes,no)

// function pow(x, n){
//   let result = 1;

//   for (let i = 0; i < n ; i++) {
//     result *= x;
//   }
//   return result;
// }

// let x = prompt("x?", ''), n = prompt("n?", '');

// if (n <= 0){
//   alert( `Power ${n} is not supported, 
//   please enter an integer number greater than zero` );
// } else {
//   alert( pow(x, n) )
// }


// let user = {
//   name: "John",
//   age: 30
// };

// let key = prompt("What do you want to know about the user?", "name");

// // access by variable
// alert( user[key] ); // John (ถ้าใส่ "name")

// let student = {
//   name = "P",
//   age = "25",
//   address = "99/531",
//   single = true,
//   point = "10"
// }

// let key = prompt("input name")
// let value;
// let obj = {};

// while (key !== "" && key !== null) {
//   value = +prompt("input number");
//   if (value > 1) {
//     key = key + "s";
//   } else if (value < 0){
//     value = 0;
//   }
//   obj[key] = value ;
//   key = prompt("input name")
// }
// console.log(obj);

// let user = {
//   name : "Pongpol" ,
//   lastName : "Ounraun" ,
//   age : "25",
//   status : "Single",
//   address : "99/531",
//   a : 1,
//   b : 2,
//   c : 3,
//   d : 4,
//   f : 5,
// }

// for (const key in user) {
//   console.log( `Key : ${key} , Value : ${user[key]}` )
// }

// let user = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 4,
//   e: 5,
//   f: 6,
//   h: 7,
//   i: 8,
//   j: 9,
//   k: 10
// }

// for (const key in user) {
//   if (key === "d" || key === "e") continue;
//   console.log( `Key : ${key} , Value : ${user[key]}` );
// }

// let obj ={};
// obj.name = "Sonter";
// obj.surname = "Pakorn";
// obj.name = "Boy";
// delete obj.name;

// console.log(isEmpty(obj));
// console.log(obj1)

// function isEmpty(obj1) {

//   for (let key in obj1) {
//     return false
//   }
//   return true
// }

// const user = {
//   name: "John"
// };

// // does it work?
// user.name = "Pete";

// console.log(user)

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }

// function sum(obj) {

//   let money = 0;
//   for (const key in obj) {
//     money += obj[key];
//   }
//   return money
// }

// console.log(sum(salaries))

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };


// console.log(multiplyNumeric(menu, 5))

// function multiplyNumeric(obj,times = 0) {
//   for (const key in obj) {
//     let check = typeof(obj[key]);
//     console.log(check)
//     if (check === "number") {
//       obj[key] = obj[key]*times;
//     }
//   }
//   return obj;
// }

// function name(n=420) {
//     let k = 0, l = 0;
//     for (let index = 2; index <= n; index+=2) {
//         k += index
//     }
//     return k

// }

// console.log(Number(name()));
// let num1 = +prompt("input number1", "0");
// let num2 = +prompt("input number2", "0");
// let calculater = {
//     num1,
//     num2,
//     sum : this.num1 + this.num2,
//     mul : this.num1 * this.num2,
// }
// let num1 = 0;
// let num2 = 0;
// let calculator = {
//     read() {
//         this.num1 = Number(prompt("input number 1", "0"));
//         this.num2 = Number(prompt("input number 2", "0"));
//     },
//     sum(){
//         return this.num1 + this.num2;
//     },
//     mul(){
//         return this.num1 * this.num2;
//     }
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );


// function Accumulator(startingValue = 0) {
//     let num1 = Number(prompt("input number", "0"));
//     this.value = num1 + startingValue;
// }

// const Accumulator1 = new Accumulator(50);
// console.log(Accumulator1)


// function Accumulator(startingValue = 0) {
//     this.value = startingValue;
//     this.read = function(){
//         let num1 = Number(prompt("input number", "0"));
//         this.value += num1;
//     }
// }
// const Accumulator1 = new Accumulator(50);
// console.log(Accumulator1);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

// function calTax(income){
//     let tax = 0;
//     if (income <= 150000) {
//         return tax = 0;
//     } else {
        
//     }
//     return tax;
// }

// let income = Number(prompt("income"))
// alert(calTax(income));


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function random(num1, num2) {
//     return Math.random() * ( num2 - num1) + num1;
// }

// let num1 = Number(prompt("Min"))
// let num2 = Number(prompt("Max"))

// console.log( random(num1, num2) );
// console.log( random(num1, num2) );
// console.log( random(num1, num2) );
// console.log( random(num1, num2) );
// console.log( random(num1, num2) );
// console.log( random(num1, num2) );
// console.log( random(num1, num2) );
// console.log( random(num1, num2) );
// console.log( random(num1, num2) );
// console.log( random(num1, num2) );
// console.log( random(num1, num2) );
// console.log( random(num1, num2) );
// console.log( random(num1, num2) );
// console.log( random(num1, num2) );
// console.log( random(num1, num2) );
// console.log( random(num1, num2) );
// console.log( random(num1, num2) );


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function ucFirst(params) {
//     let firstParam = params.slice(0, 1).toUpperCase();
//     let string = firstParam + params.slice(1);
//     return string;
// }

// let num1 = prompt("Input");
// console.log(ucFirst(num1));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function checkSpam(params) {
//     return (params.includes("xxx") || params.includes("viagra")) ? true : false ;
// }

// let num1 = prompt("Input");
// console.log(checkSpam(num1));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function truncate(params, maxlength) {
//     return params.length <= maxlength ? (params) : `${params.slice(0, maxlength)}...`;
// }
// let num1 = prompt("Input");
// console.log(truncate(num1, 20));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function extractCurrencyValue(params, rate = 0) {
//     return isNaN(params) ? Number(params.slice(1)) * rate : params * rate;
// }
// let num1 = prompt("Input");
// console.log(extractCurrencyValue(num1, 30.5));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let array1 = [1, 2, 30, 400];
// let array2 = array1.map( array => array*2);
// console.log(array2);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let array1 = [1, 2, 3, 4]
// let array2 = array1.map( array => String(array));
// console.log(array2);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let array1 = [1, "1", 2, {}] 
// let array2 = array1.map( array => typeof(array));
// console.log(array2);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let array1 = ["apple", "banana", "orange"]
// let array2 = array1.map( array => array.toUpperCase());
// console.log(array2);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let array1 = [
//     { name: "apple", age: 14 },
//     { name: "banana", age: 18 },
//     { name: "watermelon", age: 32 },
//   ]
// let array2 = array1.map( array => array.name)
// console.log(array2);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let array1 = [
//     { name: "apple", age: 14 },
//     { name: "banana", age: 18 },
//     { name: "watermelon", age: 32 },
//   ]
// let array2 = array1.map( array => array.age)
// console.log(array2);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let array1 = [
//       { name: "apple", surname: "London" },
//       { name: "banana", surname: "Bangkok" },
//       { name: "watermelon", surname: "Singapore" },
//     ]
// let array2 = array1.map( array => `${array.name} ${array.surname}`)
// console.log(array2);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let array1 = [1,3,4,5,6,7,8]
// let array2 = array1.map( array => array%2 == 0 ? "even" : "odd")
// console.log(array2);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let array1 = [1, -3, 2, 8, -4, 5]
// let array2 = array1.map( array => array < 0 ? array*(-1) : array)
// console.log(array2);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let array1 = [100, 200.25, 300.84, 400.3]
// let array2 = array1.map( array => String(array.toFixed(2)))
// console.log(array2);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let array1 = [
//     { name: "apple", birth: "2000-01-01" },
//     { name: "banana", birth: "1990-10-01" },
//     { name: "watermelon", birth: "1985-12-01" },
//   ]
// let age = [19, 29, 33]
// let i = 0
// let array2 = array1.map( array => {
//     for (const key in array) {
//         array.age = age[i];
//     }
//     i++;
//     return array
// })
// console.log(array2);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let array1 = [
//     { name: "apple", birth: "2000-01-01" },
//     { name: "banana", birth: "1990-10-10" },
//     { name: "watermelon", birth: "1985-12-30" },
//   ]
// const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

// let array2 = array1.map( array => {
//     let birthMonth = months[Number(array.birth.slice(5, 7))-1];
//     let birthYear = array.birth.slice(0, 4)
//     let birthDay = array.birth.slice(8, 10)
//     array = `<tr> <td>${array.name}</td> <td>${birthDay} ${birthMonth} ${birthYear}</td> </tr>`
//     return array
// })
// console.log(array2);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let array1 = [1, 2, 30, 400] 
// let array2 = array1.filter( array => array > 10)
// console.log(array2);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let array1 = [1, 2, 3, 4]
// let array2 = array1.filter( array => array%2 === 1 )
// console.log(array2);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let array1 = [1, "1", 2, {}] 
// let array2 = array1.filter( array => typeof(array) == "number"  )
// console.log(array2);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let array1 = ["apple", "banana", "orange", "pineapple", "watermeon"]
// let array2 = array1.filter( array => array.length > 6  )
// console.log(array2);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let array1 = [
//     { name: "apple", age: 14 },
//     { name: "banana", age: 18 },
//     { name: "watermelon", age: 32 },
//     { name: "pineapple", age: 16 },
//     { name: "peach", age: 24 },
//   ]

// let array2 = array1.filter( array => array.age < 18  )
// console.log(array2);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let array1 = [1,3,4,5,6,7,8]
// let array2 = array1.filter( array => (array%3) == 0  )
// console.log(array2);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let array1 = ["peach", 1, -3, "2", {}, []]
// let array2 = array1.filter( array => typeof(array) == "string"  )
// console.log(array2);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let array1 = ["APPLE", "appLE", "PEACH", "PEach"]
// let array2 = array1.filter( array => array == array.toUpperCase() )
// console.log(array2);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let array1 = [
//     { name: "apple", birth: "2001-01-01" },
//     { name: "banana", birth: "1990-10-10" },
//     { name: "watermelon", birth: "1985-12-30" },
//     { name: "peach", birth: "2002-10-13" },
//   ]
// let array2 = array1.filter( array => {
//     let birthMonth = array.birth.slice(5, 7);
//     if (birthMonth == "10") {
//         return array
//     }
//     return 
// })
// console.log(array2);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let array1 = [
//     { name: "apple", birth: "2001-01-01" },
//     { name: "banana", birth: "1990-10-10" },
//     { name: "watermelon", birth: "1985-12-30" },
//     { name: "peach", birth: "2002-10-13" },
//   ]
// let array2 = array1.filter( array => {
//     let birthYear = array.birth.slice(0, 4)
//     if (birthYear < "2000") {
//         return array
//     }
//     return 
// })
// console.log(array2);