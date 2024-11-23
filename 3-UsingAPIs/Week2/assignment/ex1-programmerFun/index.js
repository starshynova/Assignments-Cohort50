const body = document.querySelector('body');
const image = document.createElement('img');
const someText = document.createElement('h1');

async function requestData(url) {
  try {
    const data = await fetch(url);
    if (!data.ok) {
      throw new Error(`Attention! Error status: ${data.status}`);
    }
    return await data.json();
  } catch (error) {
    throw new Error('Network error');
  }
}

function renderImage(data) {
  image.src = data.img;
  body.appendChild(image);
  console.log(data);
}

function renderError(error) {
  someText.textContent = error.message;
  body.appendChild(someText);
  console.log(error);
}

async function main() {
  try {
    const data = await requestData('https://xkcd.now.sh/?comic=latest');
    renderImage(data);
  } catch (error) {
    renderError(new Error('You have some problem. You should fix it'));
  }
}

window.addEventListener('load', main);
