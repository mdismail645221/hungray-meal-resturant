const foodList = (search) =>{
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    .then(res => res.json())
    .then(data => displayFoodList(data.meals))
}

const displayFoodList = (data) =>{
    const foodContainer = document.getElementById('food-container');
    foodContainer.textContent = '';
    data.forEach(element =>{
       const divElement = document.createElement('div');
       divElement.classList.add('col');
       divElement.innerHTML = `
        <div onclick="foodMealsListDetails(${element.idMeal})" class="card">
            <img src="${element.strMealThumb? element.strMealThumb: 'N/A'}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">Food Name: ${element.strMeal? element.strMeal: "N/A"}</h5>
            <p class="card-text">${element.strInstructions.slice(0, 250)?element.strInstructions.slice(0, 250):"N/A"}</p>
            </div>
            <button class="btn btn-success">Food Details</button>
        </div>
       `;
       foodContainer.appendChild(divElement)
    })
}

const searbtnFoodList = () =>{
    const inputField = document.getElementById('search-food');
    const inputFieldString = inputField.value;
    foodList(inputFieldString)
    inputField.value = '';
}

const foodMealsListDetails = (data) =>{
    // const foodMealDetails = document.getElementById('foodMealDetails');
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${data}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayfoodMealsListDetails(data.meals[0]))
}

const displayfoodMealsListDetails = (data) =>{
    const foodMealDetails = document.getElementById('foodMealDetails');
    foodMealDetails.textContent = '';
   const divElement = document.createElement('div');
   divElement.classList.add('card', 'w-50');
   divElement.innerHTML = `
   <img src="${data.strMealThumb? data.strMealThumb: 'N/A'}" class="card-img-top w-50" alt="...">
   <div class="card-body">
     <h5 class="card-title">${data.strMeal? data.strMeal: "N/A"}</h5>
     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
     <a href="#" class="btn btn-primary">Go somewhere</a>
   </div>
   `;
   foodMealDetails.appendChild(divElement);
}

foodList('')