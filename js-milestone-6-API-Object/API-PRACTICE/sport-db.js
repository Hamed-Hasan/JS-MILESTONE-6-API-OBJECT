const main = document.getElementById('show-player')
const searchPlayer = () => {
    
    const error = document.getElementById('error')
    const input = document.getElementById('input-field').value
    document.getElementById('input-field').value = ''

    // input validation
    if(!isNaN(input) || input <= 0 || input == ''){
        error.innerText = 'please type player name'
        setTimeout(() => {
                error.innerText = ''
        }, 1000);
        main.innerHTML = ''
    } 
    else{
        const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${input}`
        fetch(url)
            .then(res => res.json())
            .then(data => displayPlayer(data))
            error.innerHTML = ''
            toggleSpinner('block')

    }
   
}

toggleSpinner = displayStyle =>{
    document.getElementById('spinner').style.display = displayStyle
}

const displayPlayer = players => {
    const showPlayer = document.getElementById('show-player')
    showPlayer.textContent = ''
    const allPlayer = players.player
    // for (const player of allPlayer)
            allPlayer?.forEach(player = player => {
        const div = document.createElement('div')
        div.classList.add('col-md-4')
        div.innerHTML = `
        <div class="card">
        <img src="${player.strThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${player.strPlayer}</h5>
            <p class="card-text">${player.strNationality}.</p>
            <a onclick="playerDetail('${player.idPlayer}')" href="#" class="btn btn-primary">Player Details</a>
        </div>
        </div>
        `
        showPlayer.appendChild(div)
        // console.log(player);
    }) 
    toggleSpinner('none')
}

const playerDetail = (player) => {
    const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${player}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetail(data.players[0]))
        toggleSpinner('block')
}
const displayDetail = (detail) => {
    if (detail.strGender === "Male") {
        document.getElementById('male').style.display = 'block'
        document.getElementById('female').style.display = 'none'
    } else {
        document.getElementById('male').style.display = 'none'
        document.getElementById('female').style.display = 'block'
    }
    toggleSpinner('none')

    document.getElementById('showDetail').innerHTML = `
   <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="${detail.strThumb}" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>${detail.strPlayer}l</h5>
        <p>${detail.strDescriptionEN.slice(0,50)}</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="${detail.strThumb}" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
      <h5>${detail.strPlayer}l</h5>
      <p>${detail.strDescriptionEN.slice(0,50)}</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="${detail.strThumb}" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
      <h5>${detail.strPlayer}l</h5>
      <p>${detail.strDescriptionEN.slice(0,50)}</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
   `
}