
loadData = () =>{
    fetch('https://api.thedogapi.com/v1/breeds')
.then(res => res.json())
.then(data => displayDog(data))
}

const displayDog = dogList =>{
    // console.log(dogList)
    const showDog = document.getElementById('showData')
    for(dog of dogList){
        console.log(dog)
        const div = document.createElement('div')
        div.className = 'col-lg-4 text-center'
        div.style.cursor = 'pointer'
        div.innerHTML = `
        <img onclick="dogDetail('${dog.name},${dog.height.imperial}')" width="300px" height="300px" src="${dog.image.url}"/>
        <h3>${dog.height.imperial}</h3>
        <p>${dog.name}</p>
        `
        showDog.appendChild(div)
    }
}
const show = document.getElementById('showData')
dogDetail = dog =>{
    const div = document.getElementById('showData')
    div.innerHTML = `
    <h1>${dog}</h1>
    `
    show.appendChild(div)
}