const BASE_URL = 'http://localhost:3000';
const startGameForm = document.querySelector('.startGameForm');

startGameForm.style.display = 'none';
startGameForm.style.display = 'flex';

// Next step is do a fetch to game create, with data that comes back, create all pages for players

startGameForm.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch('http://localhost:3000/games', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      name: 'Harry',
    }),
  })
    .then((res) => console.log(res.json()))
    .then();
});
