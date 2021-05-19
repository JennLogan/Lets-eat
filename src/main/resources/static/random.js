const meal_btn = document.getElementById('random_button');
const meal_container = document.getElementById('meal');

meal_btn.addEventListener('click',() => {
fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res => res.json())
    .then(res => {
        createMeal(res.meals[0]);
    })
});
function createMeal(meal){
    const ingredients=[];
    for (i=1;i<=25;i++){
        if(meal[`strIngredient${i}`]) {
            ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]} `)
        } else {
            break;
        }
    }

    meal_container.innerHTML = `
        <div class = "row">
            <div class ="column side" id="image">
            <img src="${meal.strMealThumb}" alt="Meal Image" width = "400"/>
            </div>

            <div class = "column side" id ="ingredients">
            <h5>Ingredients</h5>
            <ul>
                ${ingredients.map(ingredient => `
                <li>${ingredient}</li>
                `).join('')}
            </ul>
            </div>
        <div class="column middle" id ="recipe">
        <h4>${meal.strMeal}</h4>
        <p>${meal.strInstructions}</p>
        </div>
    </div>
       `;

};