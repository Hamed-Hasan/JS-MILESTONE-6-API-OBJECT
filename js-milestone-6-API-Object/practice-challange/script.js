/* ২. টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও।  */
const arr = [12, 34, 53, 64]
const obj = {
    name: 'hamed',
    age: 22
}
const templateString = `hello ${arr.length + 14 * 14 + ' ' + obj.name}`
console.log(templateString)

/* ৩.১ একটা প্যারামিটার ওয়ালা arrow ফাংশন ডিক্লেয়ার করো। এবং সেই ফাংশনের কাজ হবে তুমি কোন ইনপুট দিলে সেই ইনপুট সংখ্যাকে ৫ দিয়ে ভাগ করে আউটপুট দিবে। 
 */
const arrowFunc = func => func / 5
console.log(arrowFunc(55))
/* ৩.২ তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। সেই ফাংশনের ভিতরে কাজ হবে। প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো  */
const sumMultiply = (x, y) => (x + y) * y
console.log(sumMultiply(2, 2))
/* ৩.৩ এইবার তিনটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করো। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটারকে গুণ করে সেই রেজাল্ট রিটার্ন করবে।  */
const three = (x, y, z) => x * y * z
console.log(three(3, 3, 3));

/* ৩.৪ এইবার দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো।  */
const multiLine = (x, y) => (x + y) * y
console.log(multiLine(3, 3));
console.log(multiLine(2, 3));
console.log(multiLine(2, 2));

/* ৪. [হোম ওয়ার্ক] একটু গুগলে সার্চ দাও: javascript function declaration vs arrow function তারপর কয়েকটা আর্টিকেল পড়ে বুঝার চেষ্টা করো।  */
//  last work
// ৪.৫. [এক্সট্রা আরেকটা হোম ওয়ার্ক। এইটা ভিডিওতে বলা নাই]: জাভাস্ক্রিপ্ট এর var, let, const এর মধ্যে প্রার্থক্য কি? 
// 
// ৫. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে। wrong !!!
const arrMap = [23, 6, 76, 53, 64, 44]
const output = []
const map = arrMap.map(number => number * 5)
output.push(...map)
console.log(output);
// const multiple = x => x * 5
// const output = arrMap.map(multiple)
// const newArr = [...output]
// console.log(newArr);
// ৬. [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো 
const arrFilter = [23, 6, 76, 53, 64, 31, 44]
const outputOdd = []
const filter = arrFilter.filter(odd => odd % 2 == 1)
outputOdd.push(filter)
console.log(outputOdd);
// ৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো। 
const arrObj = [{
        product: 'laptop',
        price: 1000
    },
    {
        product: 'laptop',
        price: 3000
    },
    {
        product: 'laptop',
        price: 5000
    },
    {
        product: 'laptop',
        price: 6000
    }
]
const findObj = arrObj.find(obj => obj.price > 3000)
console.log(findObj);
// ৭.৫ [এক্সট্রা] জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো। 
// 
// ৮. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। 
const objj = {
    product: 'laptop',
    price: 1000
}
const {
    product,
    price
} = objj
console.log(product, price);
// ৯. [চ্যালেঞ্জিং] array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন এর উপাদান কে destructuring করে 'three' নামক একটা ভেরিয়েবল এ রাখবে। 
const arrayObj = {
    name: {
        fname: 'hamed',
        name2: {
            lname: 'hasan'
        }
    }
}
const {
    name2
} = arrayObj.name
console.log(name2);

// ১০. তিনটা প্যারামিটার ওয়ালা একটা ফাংশন লিখবে। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটার এর যোগ করে যোগফল রিটার্ন করবে। আর থার্ড প্যারামিটার এর একটা ডিফল্ট ভ্যালু থাকবে। সেটা হবে ৭। 
const defaultParam = (x, y, z = 7) => x + y + z
console.log(defaultParam(2, 2, 2));

// [অপশনাল]

// ১১. একটা nested অবজেক্ট ডিক্লেয়ার করো (অর্থাৎ একটা অবজেক্ট এর প্রপার্টি এর মধ্যেও যে অবজেক্ট থাকতে পারে। আবার সেই অবজেক্ট এর প্রপার্টি এর মধ্যেও সে অবজেক্ট থাকতে পারে। সেই রকম একটা অবজেক্ট ডিক্লেয়ার করো। এবং যেকোন একটা প্রপার্টি এর মান একটা array হবে। জাস্ট এমন একটা অবজেক্ট )
const arrayOb = {
    name: {
        fname: 'hamed',
        name2: {
            lname: 'hasan',
            fullAge:[{age: 22,smallAge: 15,bigAge: 25}]
        }
    }
}
// ১২. উপরের অবজেক্ট এ ডট এর আগে যে প্রশ্নবোধক চিহ্ন দিয়ে যে অপশনাল চেইনিং করা যায়। সেটা একটু প্রাকটিস করো। 
const {lname} = arrayOb.name.name2
console.log(...lname);

  const flatten = (arr) => {
    const result = []
    arr.forEach((i) => {
        if(Array.isArray(i)){
            result.push(...flatten(i))
        }else{
            result.push(i)
        }
    // });
    });
    return result
  }
  const nested = [1, 2, 3, [4, 5, [6, 7], 8, 9]];
  console.log(flatten(nested));

  let text = "";
  const fruits = ["apple", "orange", "cherry"];
  const myFunction = (item, index) =>{
    text += index + ": " + item 
  }
  fruits.forEach(myFunction);
   

  console.log(text);

  let sum = 0;
const number = [65, 44, 12, 4];
const myFunc = item => {
    sum += item
}
number.forEach(myFunc)
console.log(sum);

const numbers = [65, 44, 12, 4];
const sumMultiplyy = (item,index,arr) =>{
    arr[index] = item * 10
}
numbers.forEach(sumMultiplyy)
console.log(numbers);