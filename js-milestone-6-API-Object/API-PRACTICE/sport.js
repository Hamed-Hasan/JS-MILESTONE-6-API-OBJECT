//  ৮. চ্যালেঞ্জ-১
//  the meal db এর খালতো ভাই the sports db থেকে কিছু জিনিস এনে দেখাবে। একজাক্টলি কি দেখাতে হবে। সেটা আমি বলে দিবো না। তুমি ওদের ওয়েবসাইট এ যাও। সেখানে কি কি লেখা আছে সেগুলা পড়ো। api গুলা এর ছোট করে কি কি করে বলা আছে। সেগুলা দেখো। তারপর কিছু ডাটা লোড করো। সেই ডাটাগুলো দেখাও। এইখানে সার্চ ফাংশনালিটি ইমপ্লিমেন্ট করো। অনেকটা mealdb এর মতো। আবার কোন একটাতে ক্লিক করলে সেটার ডিটেল দেখাবে। 


   loadData = () =>{
    const input = document.getElementById('input')
    let inputValue = input.value;
    input.value = ''
    fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${inputValue}`)
    .then(response => response.json())
    .then(data => displayData(data))
   }
   displayData = data =>{
    //    console.log(data)
    // console.log(dataShow)
    const dataShow = data.player
    
    const dataDisplay = document.getElementById('data-display')
    dataDisplay.textContent = ''
    dataShow.forEach(data => {
        // console.log(data.strThumb)
        // console.log(data.strPlayer)
        // console.log(data.strSport)
        // console.log(data.strNationality)
        // console.log(data.strStadiumThumb)
        // console.log(data.strHeight)
        // console.log(data.strDescriptionEN)
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div class="card">
        <img src="${data.strThumb}" class="card-img-top" alt="...">
        <div class="card-body">
           
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Name: ${data.strPlayer}</li>
            <li class="list-group-item">Gender: ${data.gender}</li>
            <li class="list-group-item">City: ${data.strSport}</li>
            <li class="list-group-item">Country: ${data.strNationality}</li>
            <li class="list-group-item">Timezone: ${data.strStadiumThumb}</li>
            <li class="list-group-item">Date: ${data.strHeight}</li>
            <li class="list-group-item">Phone: ${data.strDescriptionEN.slice(0, 150)}</li>
        </ul>
        <div class="card-body">
            <a class="cardLink" onclick="cardLink('${data.idPlayer}')" href="#" class="card-link">Card link</a>
        </div>
        </div>
        `
        dataDisplay.appendChild(div)
    })
   }

   const cardLink = data =>{
    //    console.log(data)
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=Danny%20Welbeck`
    fetch(url)
    .then(res => res.json())
    .then(data => showPlayer(data))
   }

   
    
   }

   