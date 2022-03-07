// const searchMeal = () => {
//     const searchField = document.getElementById('search-field');
//     const searchText = searchField.value;
//     // clear data
//     searchField.value = '';

   
//         // load data
//         const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
//         fetch(url)
//             .then(res => res.json())
//             .then(data => displaySearchResult(data.meals))
           
// }


// const displaySearchResult = meals => {
//     const searchResult = document.getElementById('show-meal');
//     searchResult.textContent = '';
//     if (meals.length == 0) {
//         // show no result found;
//     }
//     meals.forEach(meal => {
//         // console.log(meal);
//         const div = document.createElement('div');
//         div.classList.add('col');
//         div.innerHTML = `
//         <div onclick="loadMealDetail(${meal.idMeal})" class="card h-100">
//             <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
//             <div class="card-body">
//                 <h5 class="card-title">${meal.strMeal}</h5>
//                 <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
//             </div>
//         </div>
//         `;
//         searchResult.appendChild(div);
//     })
// }
// const loadMealDetail = mealId => {
//     const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
//     fetch(url)
//         .then(res => res.json())
//         .then(data => displayMealDetail(data.meals[0]));
// }

// const displayMealDetail = meal => {
//     console.log(meal);
//     const mealDetails = document.getElementById('main');
//     const div = document.createElement('div');
//     div.classList.add('card');
//     div.innerHTML = `
//     <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
//     <div class="card-body">
//         <h5 class="card-title">${meal.strMeal}</h5>
//         <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
//         <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
//     </div>
//     `;
//     mealDetails.appendChild(div);
// }

window.onload = function() {
  toggleSpinner('block')
  };

const toggleSpinner = displayStyle => {
    document.getElementById('spinner').style.display = displayStyle
}
const toggleSearchResult = displayStyle => {
    document.getElementById('meals').style.display = displayStyle
}

const searchMeal = () =>{
    const searchText = document.getElementById('search-field').value 
    loadMeals(searchText)
    document.getElementById('search-field').value = ''
    

    // spinner
    toggleSpinner('block')
    toggleSearchResult('none')
}

const loadMeals = searchText =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}
loadMeals('fish')

const displayMeals = meals =>{
    const container = document.getElementById('meals')
    container.textContent = ''
    meals?.forEach(meal => {
        const div = document.createElement('div')
        div.innerHTML = `
        <h1>${meal.strMeal}</h1>
        <p>${meal.idMeal}</p>
        <img src="${meal.strMealThumb}"/>
        `
        container.appendChild(div)
        // console.log(meal);
    })
    toggleSpinner('none')
    toggleSearchResult('block')
}