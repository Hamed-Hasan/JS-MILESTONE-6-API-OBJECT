// ১. জাভাস্ক্রিপ্ট কী কী ডাটা টাইপের ভেরিয়েবল আছে?

// ২. জাভাস্ক্রিপ্ট ফাংশন, বা array কি টাইপের জিনিস ? 

// ৩. জাভাস্ক্রিপ্ট এ array যদি অবজেক্ট হয় তাহলে কিভাবে চেক করবে কোন একটা ভেরিয়েবল একটা array নাকি array না?

// ৪. এর মধ্যে undefined আর null এর মধ্যে ডিফারেন্স কি। 

// ৫. double equal (==) আর triple equal (===) এই দুইটার মধ্যে ডিফারেন্স কি। 

// ৬. implicit conversion কি জিনিস একটা কখন হয়। 

// ৭. এছাড়াও জাভাস্ক্রিপ্ট এ কয়েক ধরনের স্কোপ আছে। এই স্কোপ গুলার মধ্যে ডিফারেন্স কি। কখন কোনটা হয়। 

// ৮. ব্লক স্কোপ কি জিনিস? let, const কি টাইপের স্কোপ তৈরি করে?

// ৯. (এডভান্সড) Closure কি জিনিস? এইটা কিভাবে কাজ করে?

// ১০. Callback function কি জিনিস?

// ১১. (এডভান্সড) Hoisting কি জিনিস? (গুগলে সার্চ দিয়ে আরো ভালো করে শিখো )

// ১২. (এডভান্সড) কি ধরণের ভেরিয়েবল reference দিয়ে ফাংশনে পাঠানো হয় আর কোন ধরণের ভেরিয়েবল value হিসেবে পাঠানো হয়। 


// 35-1 Module Overview, Dynamic data types
// Data Types	Description	Example
// String	represents textual data	'hello', "hello world!" etc
// Number	an integer or a floating-point number	3, 3.234, 3e-2 etc.
// BigInt	an integer with arbitrary precision	900719925124740999n , 1n etc.
// Boolean	Any of two values: true or false	true and false
// undefined	a data type whose variable is not initialized	let a;
// null	denotes a null value	let a = null;
// Symbol	data type whose instances are unique and immutable	let value = Symbol('hello');
// Object


// 35-2 Primitive data type and non-primitive data type

// let a = 'hello'
// let b = a;
// a = 'gello'

// console.log(a,b);

// let x = {job: 'web developer'}
// let y = x
// x.job = 'front end developer'

// console.log(x,y);

// 35-3 Different Truthy and Falsy values in JavaScript
// truthy: -1 / 'hello' ' ' / {} / [] / Infinity
// falsy: ''/ undefined / null / 0 / NaN

let x = ''
if(x){
    console.log('truthy');
}else{
    console.log('falsy');
}

// 35-4 Null Vs Undefined, different ways you will get undefined

// 1.variable value not assigned
// 2.function but diddn't write return
// 3.just wrote return but didn't return anything 
// 4.parameter that isn't passed
// 5.property dosen't exist in an object
// 6.access array element out of range 
// 7.accessing delete array Element
// 8.explicitly set value to undefined
// 9.null without value 

// 35-5 double equal (==) vs triple equal (===), implicit conversion
// == check only value      non primitive data type check always ==
// === check both value or type      primitive data type check always ===
const first = 1;
const second = true;
if(first === second){
    console.log('they are true');
}else{
    console.log('they are false');
}

// 35-6 Block scope, global scope, Hoisting
// 1.block scope: let const using in only block area { const let }
// 2.global scope: var global scope / without variable name variable declare this is global scope the variable use all places
// 3.local scope: only declare output in function or loop / use out declare get error

// const favNam = 40 // global scope

// function add(first,second){
//     const result = first + second
//     // console.log(mod); // hoisting

//     if(result > 9){
//       let  mod = 'happy' // global leaching
//         mod = 'cranky'
// console.log(mod);

//     }
// console.log(favNam);
// console.log(result)

//     return result

// }
// const sum = add(40,10)
// console.log(mod);
// for(let i = 0;i < 10;i++){
//     console.log(i);

// }


// 35-7 (advanced) Closure, encapsulation, private variable
// 1. what is a clousering java script
// ans: function into function return   make out of encapculation 
function stopWatch(){
    let count = 0;
    return function(){
        count++;
        return count
    }
}

let clock1 = stopWatch()
console.log(clock1());
console.log(clock1());

// 35-8 (advanced) Callback function and pass different functions
// A callback is a function passed as an argument to another function
// This technique allows a function to call another function
// A callback function can run after another function has finished
function welcomeMsg (name) {  
    console.log(name);
   
}
const myObj =  {name:' tom', age: 22}

function greet(name){
    console.log('good morning');
}
welcomeMsg('tom', greet)
welcomeMsg('kom', greet)
welcomeMsg('lom', greet)

