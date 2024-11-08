async function fetchData(url) {
  try {
    const data = await fetch(url);
    if (!data.ok) {
      console.log(`Attention! Error status: ${data.status}`);
    }
    return await data.json();
  } catch (error) {
    console.log('Network error');
  }
}

async function fetchAndPopulatePokemons() {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';
  const btn = document.createElement('button');
  btn.textContent = 'Get Pokemon!';
  document.body.appendChild(btn);
  const select = document.createElement('select');
  document.body.appendChild(select);
  btn.addEventListener('click', () => {
    select.style.display = 'flex';
  });
  const data = await fetchData(url);
  data.results.forEach((pokemon) => {
    const option = document.createElement('option');
    option.value = pokemon.url;
    option.textContent = pokemon.name;
    select.appendChild(option);
  });
}

async function fetchImage(pokemonUrl, img) {
  const data = await fetchData(pokemonUrl);

  img.src = data.sprites.front_default;
  img.alt = data.name;
  console.log(
    `Displaying image for ${data.name} ${data.sprites.front_default}`
  );
}

async function main() {
  await fetchAndPopulatePokemons();
  const select = document.querySelector('select');
  const img = document.createElement('img');
  document.body.appendChild(img);
  select.addEventListener('change', async () => {
    const selectedUrl = select.value;
    await fetchImage(selectedUrl, img);
  });
}

window.addEventListener('load', main);
