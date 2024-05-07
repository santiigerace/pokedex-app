window.onload = function() {
  // Fetch data from the PokeAPI
  fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response => response.json())
    .then(data => {
      let pokemonData = data.results;
      console.log(pokemonData);
      displayPokemon(pokemonData);
    });
}

function displayPokemon(pokemonData) {
  const pokemonContainer = document.getElementById('pokemon-container');

  pokemonData.forEach(pokemon => {
    fetch(pokemon.url)
      .then(response => response.json())
      .then(pokemonDetails => {
        let pokemonDiv = document.createElement('div');
        pokemonDiv.classList.add('pokemon');

        let pokemonName = document.createElement('h2');
        pokemonName.textContent = pokemon.name;
        pokemonDiv.appendChild(pokemonName);

        let pokemonImage = document.createElement('img');
        pokemonImage.src = pokemonDetails.sprites.other.home.front_default;
        pokemonImage.addEventListener('mouseover', () => {
          pokemonImage.style.width = '200px';
          pokemonImage.style.height = '200px';
        });
        pokemonImage.addEventListener('mouseout', () => {
          pokemonImage.style.width = '100px';
          pokemonImage.style.height = '100px';
        });
        pokemonImage.addEventListener('click', () => {
          // Display more details about the Pokemon
          alert(`Name: ${pokemonDetails.name}\nHeight: ${pokemonDetails.height}\nWeight: ${pokemonDetails.weight}`);
        });
        pokemonDiv.appendChild(pokemonImage);

        pokemonContainer.appendChild(pokemonDiv);
      });
  });
}