
const main = document.getElementById('show-coctail')
 searchCocktail = () =>{
const input = document.getElementById('input-field').value
document.getElementById('input-field').value = ''
const error = document.getElementById('error')
// const inputText = input.value 

if(!isNaN(input) || input <= 0 || input == ''){
    error.innerText = 'please type your food...'
    // input.value = ''
    main.innerHTML = ''
    input.value = ''
}else{
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayDrinks(data.drinks))
    .catch(error => displayError(error))
    // input.value = ''
    error.innerHTML = ''
    toggleSpinner('block')
    // document.getElementById('error').innerHTML = `${input}🍕`
}

 }

 const displayError = () =>{
  document.getElementById('error').innerHTML = 'please type food'
  toggleSpinner('none')
 }

toggleSpinner = displaySpinner =>{
    document.getElementById('spinner').style.display = displaySpinner
}
 const displayDrinks = drinks =>{
     const showDrink = document.getElementById('show-coctail')
    //  document.getElementById('error').innerHTML = `${drinks.length}🍕 ${input}`

     showDrink.textContent = ''
     drinks.forEach(drink => {
        // console.log(drink.strDrinkThumb)
    const div = document.createElement('div')
    div.classList.add('col-lg-4')
    div.innerHTML = `
    <div onclick="drinkDetail('${drink.idDrink}')" class="card">
  <img src="${drink.strDrinkThumb}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${drink.strCategory}</h5>
    <p class="card-text">${drink.strGlass}.</p>
  </div>
</div>
    `
    showDrink.appendChild(div)
     })
     toggleSpinner('none')
 }

 const drinkDetail = drink =>{
     const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drink}`
     fetch(url)
     .then(res => res.json())
     .then(data => drinkOutput(data))
     toggleSpinner('block')
 }

 const drinkOutput = drinks =>{
     const allDrinks = drinks.drinks
    //  console.log(allDrinks[0].strAlcoholic)
    const singleDrink = allDrinks.forEach(drink => {
        // console.log(drink.strDrinkThumb)
    document.getElementById('showDetail').innerHTML = `
    <div class="card mt-5">
  <img src="${drink.strDrinkThumb}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${drink.strDrink}</h5>
    <p class="card-text">${drink.strInstructions.slice(0, 300)}</a>
  </div>
</div>
    `
    })
    toggleSpinner('none')
 }



//  tab result food 
const firstButton = () =>{

  const url =  `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka`
  fetch(url)
  .then(res => res.json())
  .then(data => showBtnOne(data.drinks))
}
firstButton()
const secondButton = () =>{

  const url =  `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin`
  fetch(url)
  .then(res => res.json())
  .then(data => showBtnOne(data.drinks))
}
const thirdButton = () =>{

  const url =  `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`
  fetch(url)
  .then(res => res.json())
  .then(data => showBtnOne(data.drinks))
}
const fourthButton = () =>{

  const url =  `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`
  fetch(url)
  .then(res => res.json())
  .then(data => showBtnOne(data.drinks))
}

const showBtnOne = infos =>{
 const show = document.getElementById('show-tab')
 show.textContent = ''
  let sliceItem = infos.slice(0, 10)
  sliceItem.forEach(info => {
    console.log(info)
    const div = document.createElement('div')
    div.className = 'col-lg-4'
    div.innerHTML = `
        <div class="card">
      <img src="${info.strDrinkThumb}" class="card-img-top" alt="...">
      <div class="card-body">
        <h6 class="card-text">${info.strDrink}</h6>
      </div>
    </div>
    `
    show.appendChild(div)
  })
}


