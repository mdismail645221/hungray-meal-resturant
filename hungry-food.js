const hungryFoodList = (search) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then(res => res.json())
        .then(data => displayHungryFoodList(data.meals))
}


const displayHungryFoodList = (data) => {
    console.log(data)
    const foodContainer = document.getElementById('food-container');
    foodContainer.textContent = '';
    data.forEach(element => {
        const divElement = document.createElement('div');
        divElement.classList.add('col');
        divElement.innerHTML = `

        <div class="card">
          <img src="${element.strMealThumb}" class="card-img-top w-full" alt="">
          <div class="card-body">
            <h5 class="card-title">Food Name: ${element.strMeal}</h5>
            <p class="card-text">${element.strInstructions.slice(0, 100)}</p>
          </div>
          <button class="btn btn-success">Food Details</button>
        </div>

        `;
        foodContainer.appendChild(divElement)
    })
}

const searbtnFoodList = () => {
    const searchFood = document.getElementById('search-food');
    const searchString = searchFood.value;
    hungryFoodList(searchString)
}


hungryFoodList('')




