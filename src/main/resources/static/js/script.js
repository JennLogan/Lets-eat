

let searchButton = document.querySelector("#search")

searchButton.addEventListener("click", ()=>{
    sendSearchRequest()
})

async function sendSearchRequest(){
    let userInput = querySelector("#input").value
    let APP_ID = "6049bf5e";
    let APP_KEY = "f1d234df327e1840c755856c93757176"
    let response = await fetch (`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_ID}&q=${user_input}`);
    console.log (response)
    let newResponse = await response.json()
    console.log (newResponse)
    search(newResponse)
    );
}

function search(){
document.querySelector("#content").innerHTML = `

`
}