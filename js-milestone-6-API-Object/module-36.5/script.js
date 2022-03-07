// Task-1
const object = {
    product: 'shop',
    shop: {
        item1: 'laptop',
        item2: 'mobile',
        price: 20000
    },
    arrObject: ['fish', 'tomato', 'meet', 'chicken'],
    totalFunction() {
        this.item1 = this.arrObject
        return this.shop.item1 + ' ' + this.arrObject
    }
}
// Task-2
const templateString = `${object.product} ${object.shop.item1} ${object.shop.price} ${object.shop.food = 'halim'} ${object.arrObject.price = 3000}`
console.log(object.shop)
console.log(templateString)
const output = object.totalFunction()
console.log(object.arrObject)
console.log(output)
// Task-3.1
const zeroParameter = () => 89
console.log(zeroParameter())
// Task-3.2
const oneParameter = param1 => parseInt(param1 / 7)
console.log(oneParameter(33))
// Task-3.3
const towParameter = (x, y) => x + y / 2
console.log(towParameter(3, 4))

// ৩.৪ একাধিক লাইন ওয়ালা অ্যারো ফাংশন লিখো। সেটাতে দুইটা প্যারামিটার নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ৭ যোগ করবে তারপর যোগফল দুইটাকে আবার যোগ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো। 
// Task-3.4
const multilineArrow1 = (x, y = 7) => (x + y) + x
const multilineArrow2 = (x, y = 7) => (x + y) + x
const multilineArrow3 = (x, y = 7) => (x + y) + x
const multilineArrow4 = (x, y = 7) => (x + y) + x

console.log(multilineArrow1(10, 9))
console.log(multilineArrow2(10, 9))
console.log(multilineArrow3(10, 9))
console.log(multilineArrow4(10, 9))
// Task-4
const mapArr = [23, 42, 5, 53, 6, 77]
const resultMap = mapArr.map(divide => divide % 7)
console.log(resultMap)
// Task-5
const balance = ['apple', 'banana', 'lemon', 'mango']
const [one, tow, three] = balance
console.log(one, tow, three);
// ৩.৪ একাধিক লাইন ওয়ালা অ্যারো ফাংশন লিখো। সেটাতে দুইটা প্যারামিটার নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ৭ যোগ করবে তারপর যোগফল দুইটাকে আবার যোগ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো। 

const newArrow = (x, y) => {
    const x1 = x + 7;
    const y1 = y + 7;
    const result = x1 + y1
    return result
}
console.log(newArrow(20,30));