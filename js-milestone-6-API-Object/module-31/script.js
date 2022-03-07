// 31-1 Simple Recap of JavaScript six core parts

// 31-2 Recap of DOM Manipulation and event handler

// 31-3 Breakup with var to have a relationship with Let and const

// 31-4 Function default parameter for not provided values

function numbers(num1, num2 = 9) {
    return num1 + num2
}
console.log(numbers(2, 7))

function number(num1, num2 = 'hasan') {
    return num1 + ' ' + num2
}
console.log(number('hamed'))

function number(num1, num2) {
    if (num2 == undefined) {
        num2 = 'hasan'
    }
    return num1 + ' ' + num2

}
console.log(number('hamed'))

// 31-5 Template string, multiple line string, dynamic string
// Js Templete String => ` `
// Js Dynamic string => ${ }
const arr = [21, 53, 64, 57, 53]
const count = 20;
const oneString = '<h1>Lorem ipsum dolor sit.' + count + '</h1>'
const secondString = `<h1>Lorem ipsum dolor ${arr.length + 50 * 100} sit.</h1>`
console.log(oneString)
console.log(secondString)


// 31-6 Arrow function, multiple parameter, function body
// Arrow function => ()
// Multiple parameter 
// Function body

const arrowFunc = (num1, num2) => num1 + num2
console.log(arrowFunc(10, 20))

const add = function add(num1, num2) {
    return num1 + num2
}
console.log(add(10, 10), add(10, 30))

// 31-7 More Arrow functions and big arrow function
// multiple parameter arrow functicon
const multiple = (x, y, z) => x * y * z
console.log(multiple(3, 3, 3))

// single parameter arrow functicon
const single = (x) => x + 10
console.log(single(10))

const withOut = (x,y) =>{
    const sum = x + y;
    const minus = x - y;
    const multiply = sum * minus
    return multiply
}
console.log(withOut(5, 3))
const arrowFunction = (x,y,z) => x *y*z
console.log(arrowFunction(3,3,3));

// 31-8 Spread operator, array max, copy arrays
const array = [43, 32, 53, 4, 222, 53, 53, 999, 63]
const array2 = [...array, 33, 55]
array2.push(40)
console.log(array2)
console.log(...array)
console.log(Math.max(2, 424, 42, 42, ))
console.log(Math.max(...array))
const num = [45, 12, 36, 84]
num.unshift(25)
console.log(num)

