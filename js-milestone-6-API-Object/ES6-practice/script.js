
const sum = (...args) =>{
    let sum = 0
    for (const arg of args) sum += arg
    return sum
}

console.log(sum(4,64,3,7,5,43,3,4));
let text = "Hello world, welcome to the universe.";
console.log(text.includes('world'));

const myArr = Array.from("ABCDEFG");
console.log(...myArr);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();
let tex = ''
for(let x of keys){
  tex += x
}
console.log(tex);


const numbers = [4, 9, 16, 25, 29];

const find = numbers.findIndex(find => find > 9)
console.log(find);

const isF = isFinite(10/0);    
const finite = isFinite(10/1);
console.log(finite,isF);
const nan = isNaN('hd')
console.log(nan);
const fruit = ["Banana", "Orange", "Apple", "Mango"];

const f = fruit.entries();
for (const fr of f) {
    console.log(...fr);
}

