
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

    <div class="card-group">
      <div class="card">
        <img src="${data.hits[0].recipe.image}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${data.hits[0].recipe.label}</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">${data.hits[0].recipe.source}</small>
        </div>
      </div>
      <div class="card">
        <img src="${data.hits[1].recipe.image}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${data.hits[1].recipe.label}</h5>
          <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">${data.hits[1].recipe.source}</small>
        </div>
      </div>
      <div class="card">
        <img src="${data.hits[2].recipe.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${data.hits[2].recipe.label}</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">${data.hits[2].recipe.source}</small>
        </div>
      </div>
    </div>

        <div class="card-group">
          <div class="card">
            <img src="${data.hits[3].recipe.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${data.hits[3].recipe.label}</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">${data.hits[3].recipe.source}</small>
            </div>
          </div>
          <div class="card">
            <img src="${data.hits[4].recipe.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${data.hits[4].recipe.label}</h5>
              <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">${data.hits[4].recipe.source}</small>
            </div>
          </div>
          <div class="card">
            <img src="${data.hits[5].recipe.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${data.hits[5].recipe.label}</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">${data.hits[5].recipe.source}</small>
            </div>
          </div>
        </div>
`
}