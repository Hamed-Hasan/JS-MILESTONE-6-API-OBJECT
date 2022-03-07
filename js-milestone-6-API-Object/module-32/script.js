// 32-1 Module Introduction and Basic ES6 Recap

const res = x => x * x
console.log(res(3))

// 32-2 Destructuring Object to extract values to variables

const man = {
    name: 'hamed',
    age: 26,
    height: '6ft'
}
const save = man.name
console.log(save);
const {
    name,
    height
} = man
console.log(height)

const product = {
    laptop: 'keyword',
    charger: '3k',
    price: {
        new: 22,
        one: 30,
        tow: 50,
        newPrice: {
            year1: 2021,
            year2: 2022,
            year3: 2024,
            mosque: {
                color: 'white',
                minar: 'green',
                size: 'bigger'
            }
        }
    }
}

const {one,tow} = product.price
const {year1,year3} = product.price.newPrice
const {minar} = product.price.newPrice.mosque
console.log(minar)
console.log(year1, year3)
console.log(one, tow)

// 32-3 (advanced) Array Destructuring, nested object Optional chaining
const object = {
    name: 'hamed',
    age: 22,
    address: 'doha'
}
const {
    ob1,
    ob2,
    ob3
} = object
console.log(object)

const [x, y, z] = [32, 42, 52, 64, 75]
console.log(x,y,z)

// 32-4 Array map to do one line loop magic
// function doubleIt(number){
//     return number * 2
// }
const numbers = [95, 43, 2, 33]
const num = number => number * 2

for (const number of numbers) {
    const result = (number)
    console.log(result)
}

const nullPut = []
const output = numbers.map(number => number * 2)
nullPut.push(output)

console.log(nullPut)

// 32-5 Map string array, array of objects map, foreach
const arrString = ['tom one', 'tom bigger', 'tom smaller', 'tom ok']
const len = arrString.map(len => len.length % 2 != 0)
console.log(len)

const products = [{
        name: 'mobile',
        price: 234220,
        work: 100
    },
    {
        name: 'laptop',
        price: 2242320,
        work: 100
    },
    {
        name: 'sony',
        price: 224220,
        work: 100
    },
    {
        name: 'panasonic',
        price: 2220,
        work: 100
    },
]

const outputResult = products.map(products => products.name)
console.log(outputResult)

products.forEach(product => console.log(product))


// // 32-6 (advanced) Implement filter, find on an array of objects
// // Map get all element
// // Filter get all element
// // Find get all element to one element
const shop = [{
        name: 'mobile',
        price: 200,
        work: 100
    },
    {
        name: 'laptop',
        price: 80,
        work: 100
    },
    {
        name: 'laptop',
        price: 90,
        work: 100
    },
    {
        name: 'mobile',
        price: 300,
        work: 100
    },
    {
        name: 'panasonic',
        price: 100,
        work: 100
    },
]
const map = shop.map(product => product.work + 10)
console.log(map)
const fil = shop.filter(number => number.price < 100)
console.log(fil)
const filString = shop.filter(number => number.name == 'mobile')
console.log(filString)

const find = shop.find(number => number.price > 100)
console.log(find)
const findString = shop.find(number => number.name == 'mobile')
console.log(findString)


// 32-7 (advanced) Class, constructor, method, create object from class

class Support {
    name;
    designation = 'web dev support'
    address = 'BD'
    constructor(name) {
        this.name = name
        this.address
    }
    startSession() {
        console.log(this.name, this.address, 'start a support session')
    }
}

const hamed = new Support('hamed hasan');
const sayed = new Support('sayed hasan')
const humaira = new Support('fah mida')
hamed.startSession()
sayed.startSession()
humaira.startSession()
// console.log(hamed)
// console.log(sayed)
console.log(hamed, sayed, humaira)

// 32-8 (advanced) Inheritance, extends class, super, class method
class TeamMember {
    name;
    address = 'BD'
    constructor(name) {
        this.name = name
        this.address
    }
}
class SupportSession extends TeamMember {
    designation = 'web dev support'
    constructor(name, address, time) {
        super(name, address)
        this.groupTime = time
    }
    startSession() {
        console.log(this.name, this.address, 'start a support session')
    }
}

class StudentCare extends TeamMember {
    designation = 'web dev support'
    buildARoutine(student) {
        console.log(this.name, 'build a routine for', student)
    }
}
class Neptune extends TeamMember {
    designation = 'web dev support'
    codeEditor;
    constructor(name, address, editor) {
        super(name, address)
        this.codeEditor = editor
    }
    releaseApp(version) {
        console.log(this.name, 'release app for', version)
    }
}

const mrhamed = new SupportSession('hamed hasan', 'BD', 11);
const mrsayed = new SupportSession('sayed hasan')
const mrhumaira = new SupportSession('fah mida')
mrhamed.startSession()
mrsayed.startSession()
mrhumaira.startSession()
const alifa = new StudentCare('mr alifa', 'chittagong')
const rifa = new Neptune('rifa', 'bd', 'android studio')
rifa.releaseApp('1.3.5.6')
console.log(rifa)
console.log(hamed,sayed,humaira)
console.log(mrhamed)
console.log(alifa)

