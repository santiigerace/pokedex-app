// Import the function to be tested
const displayPokemon = require('./main');

// Mock the necessary dependencies
jest.mock('node-fetch', () => require('fetch-mock-jest').sandbox());

describe('displayPokemon', () => {
  let pokemonContainer;

  beforeEach(() => {
    // Create a mock container element
    pokemonContainer = document.createElement('div');
    pokemonContainer.id = 'pokemon-container';
    document.body.appendChild(pokemonContainer);
  });

  afterEach(() => {
    // Clean up the container element after each test
    document.body.removeChild(pokemonContainer);
  });

  test('displays the correct number of Pokemon', async () => {
    // Mock the response from the API
    fetch.mockResponseOnce(JSON.stringify({ name: 'bulbasaur', sprites: { front_default: 'bulbasaur.png' } }));

    // Call the function with sample data
    await displayPokemon([{ name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1' }]);

    // Check if the correct number of Pokemon are displayed
    expect(pokemonContainer.querySelectorAll('.pokemon').length).toBe(1);
  });

  test('displays the correct Pokemon details on click', async () => {
    // Mock the response from the API
    fetch.mockResponseOnce(JSON.stringify({ name: 'bulbasaur', height: 7, weight: 69 }));

    // Call the function with sample data
    await displayPokemon([{ name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1' }]);

    // Trigger a click event on the Pokemon image
    pokemonContainer.querySelector('.pokemon img').click();

    // Check if the alert displays the correct details
    expect(window.alert).toHaveBeenCalledWith('Name: bulbasaur\nHeight: 7\nWeight: 69');
  });
});