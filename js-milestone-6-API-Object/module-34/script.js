const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayBuddies(data));
}
loadBuddies();

const displayBuddies = data => {
    console.log(data);
    const buddies = data.results;
    const buddiesDiv = document.getElementById('buddies');
    for (const buddy of buddies) {
        const p = document.createElement('p');
        p.innerText = `Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last} email: ${buddy.email}`;
        buddiesDiv.appendChild(p);
    }
}







const loadCountries =  () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}
loadCountries();

const displayCountries = counties => {
    // for (const country of counties) {
    //     console.log(country);
    // }
    const countriesDiv = document.getElementById('countries');
    counties.forEach(country => {
        // console.log(country);
        const div = document.createElement('div');
        div.classList.add('country')
        div.innerHTML = `
            <h3>${country.name.common}</h3>
            <p>${country.capital}</p>
            <button onclick="loadCountryByName('${country.name.common}')">Details</button>
        `;
        countriesDiv.appendChild(div);
    });
}

const loadCountryByName = name => {
    const url = `https://restcountries.com/v3.1/name/${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]));
}

const displayCountryDetail = country => {
    console.log(country);
    const countryDiv = document.getElementById('country-detail');
    countryDiv.innerHTML = `
        <h5>${country.name.common}</h4>
        <p>population: ${country.population}</p>
        <img width="200px" src="${country.flags.png}">
    `
}














document.getElementById('error-message').style.display = 'none';
const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // clear data
    searchField.value = '';
    document.getElementById('error-message').style.display = 'none';
    if (searchText == '') {
        // please write something to display
    }
    else {
        // load data
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.meals))
            .catch(error => displayError(error));
    }
}

const displayError = error => {
    document.getElementById('error-message').style.display = 'block';
}

const displaySearchResult = meals => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    if (meals.length == 0) {
        // show no result found;
    }
    meals.forEach(meal => {
        // console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadMealDetail(${meal.idMeal})" class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
            </div>
        </div>
        `;
        searchResult.appendChild(div);
    })
}

const loadMealDetail = mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetail(data.meals[0]));
}

const displayMealDetail = meal => {
    console.log(meal);
    const mealDetails = document.getElementById('meal-details');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
        <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
    </div>
    `;
    mealDetails.appendChild(div);
}












































// // 34-1 Basic API concept recap with Kanye West
// // Get api from : www.kanye.rest
// const loadQuote = () => {
//     fetch('https://api.kanye.rest/')
//         .then(res => res.json())
//         .then(data => displayQuote(data))
// }

// // loadQuote()

// const displayQuote = quote => {
//     const kanye = document.getElementById('kanye')
//     kanye.innerText = quote.quote
//     // console.log(quote.quote);
// }

// // 34-2 (advanced) Handle and display Nested API data


// const loadResult = () => {
//     fetch('https://randomuser.me/api/?results=5')
//         .then(res => res.json())
//         .then(data => displayResult(data))
// }

// // loadResult() // call function

// const displayResult = result => {
//     // console.log(result.results[0].name);
//     const buddies = result.results
//     const bud = document.getElementById('buddies')
//     for (const buddy of buddies) {
//         console.log(buddy)
//         const div = document.createElement('div')
//         div.innerText = `Name: ${buddy.name.first} Email: ${buddy.email}`
//         bud.appendChild(div)
//     }

// }

// // 34-3 International Travel, Display countries name, capital

// const loadCountries = () => {
//     fetch('https://restcountries.com/v3.1/all')
//         .then(res => res.json())
//         .then(data => displayCountries(data))
// }
// loadCountries()

// // 34-4 (advanced) Call dynamic API, load dynamic data to display
// const displayCountries = countries => {
//     const countryDiv = document.getElementById('countries')
//     countries.forEach(country => {
//         // console.log(country)
//         const div = document.createElement('div')
//         div.classList.add('country')
//         div.innerHTML = `
//         <h4>${country.name.common}</h4>
//         <p>${country.capital}</p>
//         <button onclick="loadDetail('${country.capital}')">Detail</button>
//         `
//         // countryDiv.appendChild(div)
//     })
// }

// const loadDetail = name => {
//     const url = `https://restcountries.com/v3.1/name/${name}`
//     fetch(url)
//         .then(res => res.json())
//         .then(data => displayLoadDetail(data))
// }

// const displayLoadDetail = country => {
//     const countryDetail = document.getElementById('country-detail')
//     countryDetail.innerHTML = `
// <h3>${country.capital}</h3>
// <p>${country.population}</p>
// <img> src = "${country.flags}">
// `
//     // console.log(country);
// }

// // 34-5 Explore meal db api and create dynamic url to load meals
// const searchFood = () =>{
//     const searchField = document.getElementById('search-input')
//     const searchText = searchField.value 
//     // console.log(searchText)
//     searchField.value = ''
    
//     const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
//     fetch(url)
//     // console.log(url);
//     .then(res => res.json())
//     .then(data => displayFood(data.meals))
    
// }

// const displayFood = food =>{
//     const addItem = document.getElementById('add-item')
//     food.forEach(item => {
//         console.log(item);
//         const div = document.createElement('div')
//         div.classList.add('col')
//         div.innerHTML = `
//         <div class="col">
//         <div onclick="mealId('${item.idMeal}')" class="card">
//           <img src="${item.strMealThumb}" class="img-fluid" alt="...">
//           <div class="card-body">
//             <h5 class="card-title">${item.strInstructions.slice(0,20)}</h5>
//             <p class="card-text">${item.strInstructions.slice(0,200)}</p>
//           </div>
//         </div>
//       </div>
//         `
//         addItem.appendChild(div)
//         // console.log(item);
//     })
// }

// // 34-7 Create dynamic url based on click and display data

// const mealId = (mealId) =>{
//     const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
//     fetch(url)
//     .then(res => res.json())
//     .then(data => displayItem(data.meals[0].idMeal))
// }

// const displayItem = meal =>{
//     const mealDetail = document.getElementById('meal-detail')
//     const div = document.createElement('div')
//     div.classList.add('card')
//     div.innerHTML = `
// <div class="card w-50 mx-auto">
//   <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">${meal.strMeal}</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
//     `
// mealDetail.appendChild(div)
// console.log(meal);
// }