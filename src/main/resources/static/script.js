
let searchButton = document.getElementById("search");
searchButton.addEventListener("click", ()=>{
    console.log (searchButton);
    sendSearchRequest()
});

async function sendSearchRequest(){
    let userInput = querySelector("#searchTerm").value
    let APP_ID = "6049bf5e";
    let APP_KEY = "f1d234df327e1840c755856c93757176";
    let response = await fetch (`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}&q=pasta`);
    console.log (response)
    let data = await response.json()
    console.log (data)
    searchRecipe(data);
}

function searchRecipe(){
    document.querySelector("#content").innerHTML = `
    <div class="card" style="width: 18">
     <img src="${data.hits[0].recipe.label}"  class="card-img-top" alt="sorry no picture">
        <div class ="card-body">
            <h5 class="recipe-title">${data.hits[0].recipe.label}</h5>
            <p class= "recipe-text">${data.hits[0].recipe.source}</p>
            <a href= "${data.hits[0].recipe.url}" class="btn btn-primary">GO</a>
        </div>
    </div>
`
}