/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/blob/main/3-UsingAPIs/Week2/README.md#exercise-2-gotta-catch-em-all

Complete the four functions provided in the starter `index.js` file:

`fetchData`: In the `fetchData` function, make use of `fetch` and its Promise 
  syntax in order to get the data from the public API. Errors (HTTP or network 
  errors) should be logged to the console.

`fetchAndPopulatePokemons`: Use `fetchData()` to load the pokemon data from the 
  public API and populate the `<select>` element in the DOM.
  
`fetchImage`: Use `fetchData()` to fetch the selected image and update the 
  `<img>` element in the DOM.

`main`: The `main` function orchestrates the other functions. The `main` 
  function should be executed when the window has finished loading.

Use async/await and try/catch to handle promises.

Try and avoid using global variables. As much as possible, try and use function 
parameters and return values to pass data back and forth.
------------------------------------------------------------------------------*/
const url = ' https://pokeapi.co/api/v2/pokemon?limit=151';

async function fetchData(url) {
  try {
    const data = await fetch(url);
    if (!data.ok) {
      console.log(`Attention! Error status: ${data.status}`);
    }
    return await data.json();
  } catch (error) {
    console.log('Network error');
    // throw new Error('Network error');
  }
}

function fetchAndPopulatePokemons(/* TODO parameter(s) go here */) {
  const body = document.querySelector('body');
  const btn = document.createElement('button');
  btn.textContent = 'Get Pokemon!';
  body.appendChild(btn);
}

function fetchImage(/* TODO parameter(s) go here */) {
  // TODO complete this function
}

function main() {
  fetchData(url);
}

main();
