// ১. একদম প্রাথমিক স্টেপ হিসেবে jsonplaceholder এর ওয়েবসাইট থেকে ডাটা fetch করে সেটাকে কনসোল এ দেখাতে হবে। ধরো তুমি তাদের ওয়েবসাইট এ comments এর API এর লিংক কোনটা সেটা জাভাস্ক্রিপ্ট দিয়ে কোড করে সেই ডাটা কনসোল এ দেখতে পারতেছো কিনা। 

// fetch('https://jsonplaceholder.typicode.com/comments')
//   .then(response => response.json())
//   .then(json => console.log(json))

//   ২. যে কমেন্ট এর ডাটাগুলো কনসোল এ দেখাতে পারছো। সেগুলা আবার তুমি html এ দেখাতে পারতেছো কিনা। একটা সিস্টেম হবে তোমার একটা বাটন। থাকবে সেটাতে ক্লিক করলে ডাটা লোড হবে। তারপর সেই ডাটা তুমি ওয়েবসাইট এ দেখাবে। 

// ৩. আরেকটা সিস্টেম হবে। তুমি যে ডাটা লোড করেছো। সেটা কোন বাটনে ক্লিক করা লাগবে না। ওয়েবসাইট লোড হলেই সরাসরি ডাটা লোড হয়ে তারপর সেই ডাটা ওয়েবসাইট এ দেখাবে। চেষ্টা করবে লোড করা ডাটা এর দুইটা প্রপার্টি অবশ্যই দেখাবে।

// ৪. তুমি যে ডাটা লোড করেছো। বা ডাটা ওয়েবসাইট এ দেখাচ্ছ। সেই কোড এর মধ্যে arrow ফাংশন ইউজ করতে পারতেছো কিনা। যখন লুপ চালাচ্ছ সেখানে forEach ইউজ করতে পারতেছো কিনা। 

// ৫. ডাইনামিক ডাটা লোড। কোন একটা কমেন্ট এ ক্লিক করলে (কমেন্ট এর div এ বা কোন একটা বাটন এ )সেই কমেন্ট এর আইডি নিয়ে সেটা api এর url এ বসিয়ে (ডাইনামিকভাবে টেমপ্লেট স্ট্রিং দিয়ে) সেই ডাটা লোড করে। সেই ডাটা ওয়েবসাইট এ দেখাতে পারতেছো কিনা। 



// const loadData = () =>{
//     fetch('https://jsonplaceholder.typicode.com/comments')
//   .then(response => response.json())
//   .then(data => displayData(data))
// }
// // loadData()
// const displayData = data =>{
//     const dataShow = document.getElementById('data-show')
//     data.forEach(data => {
//     const div = document.createElement('div')
//     div.innerHTML = `
//     <h2>${data.name}</h2>
//     <button onclick="dataDetail('${data.name}')">click data</button>
//     `
//     dataShow.appendChild(div)
//    })

//     dataDetail = data =>{
//     const dataShow = document.getElementById('data-show')
//     const p = document.createElement('p')
//     p.innerHTML = `
//     <b>${data}</b>
//     `
//     dataShow.appendChild(p)
//    }

//     // console.log(data[0].name)
// }

// ৬. randomuser এর ওয়েবসাইট এ গিয়ে (randomuser.me) এ গিয়ে সেখান থেকে ডাটা লোড করবে। তারপর ইউজারের ছবি দেখাবে। শুধু সেটাও না। ইউজারের location এর মধ্যে যত কিছু আছে। সব দেখাবে ওয়েবসাইট এ। অর্থাৎ street, city, coordinates, timezone যেকোন একভাবে দেখলেই হবে। তবে দেখাতে হবে। 

const loadData = () => {
    fetch('https://randomuser.me/api/?results=50')
        .then(response => response.json())
        .then(data => displayData(data))

}
loadData()

const displayData = data => {
    // const arrayData = 
    const dataArray = data.results
    const dataShow = document.getElementById('data-show')
    dataArray.forEach(data => {
        // console.log(data.picture.medium)
        // console.log(data.location.street.number)
        // console.log(data.location.country)
        // console.log(data.location.timezone.offset)
        // console.log(data.registered.date)
        // console.log(data.phone)

        const div = document.createElement('div')
        div.className = "col";
        div.innerHTML = `
                    <div class="card">
            <img src="${data.picture.medium}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Name: ${data.name.last}</li>
                <li class="list-group-item">Gender: ${data.gender}</li>
                <li class="list-group-item">City: ${data.location.city}</li>
                <li class="list-group-item">Country: ${data.location.country}</li>
                <li class="list-group-item">Timezone: ${data.location.timezone.offset}</li>
                <li class="list-group-item">Date: ${data.registered.date}</li>
                <li class="list-group-item">Phone: ${data.phone}</li>
            </ul>
            <div class="card-body">
                <a class="cardLink" onclick="cardLink('${data}')" href="#" class="card-link">Card link</a>
            </div>
            </div>
        `

        dataShow.appendChild(div)
        // console.log(data)



    })
}

// card link 
const cardLink = data => {
    const url = `https://randomuser.me/api/?gender=${data}`
    fetch(url)
        .then(res => res.json())
        .then(data => linkDisplay(data.results[0]))
}



const linkDisplay = data => {
    const display = document.getElementById('display')
    const div = document.createElement('div')
    div.classList.add('col')
    div.innerHTML = `
    <div class="card">
    <img src="${data.picture.medium}"/>
  <div class="card-body">
    <h5 class="card-title">${data.name.first} ${data.name.last}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${data.name.first}</h6>
    <p class="card-text">${data.gender}.</p>
  </div>
</div>
    `
    display.appendChild(div)
console.log(data)
}