// 36-1 Module introduction Different way to Create Object
// using Object literal 
1
const student = new Object({
    name: 'sakib al hasan',
    job: 'cricketer'
})
console.log(student)
// constructor 
// 2
const person = new Object()
// 3
const human = Object.create(null)
const man = Object.create(student)
console.log(man);
// 4 class
class people {
    constructor(name, age, address, city) {
        this.name = name;
        this.age = age
        this.address = address;
        this.city = city
    }
}
const peo = new people("hamed", 22, "chawkbazar", "ctg")

// 5 
function Manus(name, age) {
    this.name = name
    this.age = age
}

const manus = new Manus('hasan', 22)

console.log(manus);
console.log('make object class', peo);
console.log('make object create', human);
console.log('make object create', student.job);

// 36-2 Object method property review
const students = {
    id: 101,
    money: 5000,
    name: 'hamed',
    major: 'mathematics',
    subject: ['english', 'economics', 'calculus'],
    bestFriend: {
        name: 'hab',
        major: 'science'
    },
    takeExam: function () {
        console.log(this.bestFriend.name, 'take exam')
    },
    treatDey: function (expense, boksis) {
        this.money = this.money - expense - boksis
        return this.money
    }
}
students.takeExam()
console.log(students.treatDey(1000, 500))
console.log(students.treatDey(1000, 500))
console.log(students.treatDey(1000, 500))
console.log(students.money);

// 36-3 Keys, values, entries, delete, seal, freeze
const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isCleaned: true
};
// getting all properties 
const keys = Object.keys(bottle)
console.log(keys);
// getting all value 
const value = Object.values(bottle)
console.log(value);
// getting all value & properties
const pairs = Object.entries(bottle)
console.log(pairs);

Object.seal(bottle)
bottle.price = 100
bottle.height = 20
Object.freeze(bottle)
delete bottle.isCleaned
console.log(bottle)

// 36-4 Loop through an object using for in, for of, object entries
const bottles = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isCleaned: true
};
/* 
for(let i = 0; i<10;i++){}
for(const num of numbers){} // array
for(const prop in student){} // object
*/
for (const prop in bottles) {
    console.log(prop)
}
const key = Object.keys(bottles)
for (const prop of key) {
    console.log(prop, bottles[prop])
}

const entire = Object.entries(bottles)
for (const [key, value] of Object.entries(bottles)) {
    console.log(key, value)
}

// 36-5 (advanced) Compare objects, referential integrity
const first = {
    a: 1,
    b: 2
};
const second = {
    a: 1,
    b: 2
};

const third = first
if (first === third) {
    console.log('object is equal')
} else {
    console.log('object is not equal')
}
console.log(JSON.stringify(first))
console.log(JSON.stringify(second))
if(JSON.stringify(first) === JSON.stringify(second)){
    console.log('both are equal')
}else{
    console.log('not equal')
}

function compareObjects(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    for (const prop in obj1) {
        if (obj1[prop] !== obj2[prop]) {
            return false;
        }
    }
    return true;
}

const isEqual = compareObjects(first, second);
console.log(isEqual);
// 36-6 (advanced) Use bind to borrow method from another object
const kibria = {
    id: 101,
    money: 5000,
    name: 'RJ Kibria',
    treatDey: function(expense){
        this.money = this.money - expense
        console.log(this,'decrease value')
        return this.money
    }
}
const heroBalam = {
    id: 102,
    money: 6000,
    name: 'Hero Balam'
}
const normalGolam = {
    id: 102,
    money: 8000,
    name: 'Normal Golam'
}

// method -1
kibria.treatDey(1000)
const heroTreatDey = kibria.treatDey.bind(heroBalam)
heroTreatDey(3000)
console.log(heroBalam)
const normalTreatDey = kibria.treatDey.bind(normalGolam);
normalTreatDey(3000)
console.log(normalGolam)

// 36-7 (advanced) Difference between bind, call and apply
const kibrias = {
    id: 101,
    money: 9000,
    name: 'RJ Kibria',
    treatDey: function(expense,boksis,tax){
        this.money = this.money - expense - boksis - tax
        // console.log('decrease value',this)
        return this.money
    }
}
const heroBalams = {
    id: 102,
    money: 6000,
    name: 'Hero Balam'
}
const normalGolams = {
    id: 102,
    money: 8000,
    name: 'Normal Golam'
}
// method - 2
kibrias.treatDey(1000,1000,1000)
kibrias.treatDey.call(heroBalams,1000,1000,1000)
kibrias.treatDey.call(heroBalams,100,100,100)
kibrias.treatDey.call(heroBalams,100,100,100)
console.log('hero balam',heroBalams)


kibrias.treatDey.apply(normalGolams,[1000,1000,1000])
kibrias.treatDey.apply(normalGolams,[1000,1000,1000])
console.log(normalGolams)
// 36-8 ( super advanced) Understand this keyword in JavaScript
const kib = {
    id: 101,
    money: 5000,
    name: 'RJ Kibria',
    treatDeyArrow: () => {
        console.log(this);
    },
    treatDeyInside: function () {
        const myArrow = () => console.log(this);
        myArrow();
    },
    treatDey: function (expense) {
        this.money = this.money - expense;
        console.log('here5555', this.money);
        return this.money;
    }
}

kib.treatDey(1000)
const heroBal = {
    id: 102,
    money: 6000,
    name: 'Hero Balam'
}

function add() {
    console.log(this);
}

const ahmad = {
    id: 101,
    money: 5000,
    fname: 'RJ Kibria',
    lname: 'hossain',
   fullName: function(){
       return this.fname + this.lname
   }
}
const ahmads = {
    id: 101,
    money: 5000,
    fname: 'RJ king',
    lname: 'hossain'
}
const ahmads2 = {
    id: 101,
    money: 5000,
    fname: 'rifa',
    lname: 'hossain'
}
console.log(ahmad.fullName())
console.log(ahmad.fullName.call(ahmads))
console.log(this);
// 36-9 Module summary and checklist
