// 33-1 Module Introduction and What is an API

// 33-2 Intro to JSON, JSON Structure, parse, stringify
// Object to JSON convert use > stringify
// JSON to object Convert use > parse

const shop = {
    name: 'laptop',
    coreI: 'five',
    generation: 10,
    global: {
        type: 'product',
        country: 'BD',
        price: 20000
    },
    commerce: ['amazon', 'ali baba', 'google'],
    isExpensive: false
}
// Object to JSON
const stringified = JSON.stringify(shop)
// JSON to Object 
const convert = JSON.parse(stringified)
console.log(convert, 'JSON to Object ');
console.log(stringified, 'Object to JSON');
console.log(shop);

// 33-3 JSON placeholder, GET data, display data on UI 
function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(Response => Response.json())
        .then(data => console.log(data))
}

// 33-4 Load more data, more APIs, send data to function
function getUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response => Response.json())
        .then(data => displayUsers(data))
}

function getPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(Response => Response.json())
        .then(data => displayPost(data))
}

// 33-5 Dynamically display loaded data on your website

function displayUsers(data) {
    const ul = document.getElementById('user')
    for (user of data) {
        const li = document.createElement('li')
        li.innerText = `User Name: ${user.name},
        User Email: ${user.email},`
        ul.appendChild(li)
        console.log(user);

    }

}

// 33-6 Load posts and display on the website with CSS
function getPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(Response => Response.json())
        .then(data => displayPost(data))
}
// getPost()
function displayPost(post){
    const section = document.getElementById('post')
    for(const pos of post){
        // console.log(pos.body);
        const div = document.createElement('div')
        div.classList.add('post')
        div.innerHTML = `<h1>${pos.title}</h1>
                            <b>${pos.body}</b> `
        section.appendChild(div)
    }
}

// 33-7 GET, POST, PATCH, DELETE, CRUD, GET Vs POST
function addPost(){
    fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}
// addPost()
//   33-8 Debug API, Network tab,Status code,
//  headers, bad API learn google

// 33-9 Module Summary and two homeworks
function loadComment(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(data => displayComment(data))
}
// loadComment()
function displayComment(comment){
    console.log(comment);
    const commen = document.getElementById('comment')
    for (const comm of comment) {
        const div = document.createElement('div')
        div.innerText = `${comm.name}`
        commen.appendChild(div)
    }
}

function loadImg(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(data => displayImg(data))
}
// loadImg()
function displayImg(img){
    const image = document.getElementById('images')
    for(const images of img){
        // console.log(images);
        const img = document.createElement('img')
        img.src = 'https://via.placeholder.com/600/771796'
        image.appendChild(img)
    }
}
const info={ data: [ { language:"Javascript", library:"React" } ] }  
const sult = info.data.react
console.log(sult);