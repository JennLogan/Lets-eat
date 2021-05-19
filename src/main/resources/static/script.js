
let searchButton = document.querySelector("#search");
searchButton.addEventListener("click", ()=>{
    console.log (searchButton);
    sendSearchRequest()
});

async function sendSearchRequest(){
    let userInput = document.querySelector('#searchTerm').value;
    let APP_ID = "6049bf5e";
    let APP_KEY = "f1d234df327e1840c755856c93757176";
    let response = await fetch (`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}&q=${userInput}`);
    console.log (response)
    let data = await response.json()
    console.log (data)
    searchRecipe(data);
}

function searchRecipe(data){
    document.querySelector("#content").innerHTML = `

    <div class="card mb-3" style="max-width: 540px; background-color: grey; ">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img src="${data.hits[0].recipe.image}" class="card-img" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${data.hits[0].recipe.label}</h5>
             <ul class="card-text">
                <li>${data.hits[0].recipe.dishType}</li>
                <li>${data.hits[0].recipe.mealType}</li>
                <li>${data.hits[0].recipe.cuisineType}</li>
             </ul>
            <p class="card-text"><a href="#" class="btn btn-link" onclick="window.location='${data.hits[0].recipe.url}';">${data.hits[0].recipe.source}</a></p>
          </div>
        </div>
      </div>
    </div>
    <div class="card mb-3" style="max-width: 540px; background-color: grey;">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img src="${data.hits[1].recipe.image}" class="card-img" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${data.hits[1].recipe.label}</h5>
             <ul class="card-text">
                <li>${data.hits[1].recipe.dishType}</li>
                <li>${data.hits[1].recipe.mealType}</li>
                <li>${data.hits[1].recipe.cuisineType}</li>
             </ul>
            <p class="card-text"><a href="#" class="btn btn-link" onclick="window.location='${data.hits[1].recipe.url}';">${data.hits[1].recipe.source}</a></p>
          </div>
        </div>
      </div>
    </div>

    <div class="card mb-3" style="max-width: 540px; background-color: grey;">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img src="${data.hits[2].recipe.image}" class="card-img" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${data.hits[2].recipe.label}</h5>
             <ul class="card-text">
                <li>${data.hits[2].recipe.dishType}</li>
                <li>${data.hits[2].recipe.mealType}</li>
                <li>${data.hits[2].recipe.cuisineType}</li>
             </ul>
            <p class="card-text"><a href="#" class="btn btn-link" onclick="window.location='${data.hits[2].recipe.url}';">${data.hits[2].recipe.source}</a></p>
          </div>
        </div>
      </div>
    </div>

    <div class="card mb-3" style="max-width: 540px; background-color: grey;">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img src="${data.hits[3].recipe.image}" class="card-img" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${data.hits[3].recipe.label}</h5>
             <ul class="card-text">
                <li>${data.hits[3].recipe.dishType}</li>
                <li>${data.hits[3].recipe.mealType}</li>
                <li>${data.hits[3].recipe.cuisineType}</li>
             </ul>
            <p class="card-text"><a href="#" class="btn btn-link" onclick="window.location='${data.hits[3].recipe.url}';">${data.hits[3].recipe.source}</a></p>
          </div>
        </div>
      </div>
    </div>
`
}