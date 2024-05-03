import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PokemonApi } from './PokemonApi'

function PokemonDropdown() {
  const [pokemonNames, setPokemonNames] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0');
        const data = response.data;
        const names = data.results.map(pokemon => pokemon.name);
        setPokemonNames(names);
      } catch (error) {
        console.error('Error fetching Pokemon:', error);
      }
    };

    fetchData();
  }, []);

  const handleSelectChange = event => {
    setSelectedPokemon(event.target.value);
  };

  return (
    <div>
      <div className='selectBox'>
        <select value={selectedPokemon} onChange={handleSelectChange}>
          <option value="">Select a Pokemon</option>
          {pokemonNames.map((name, index) => (
            <option key={index} value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>
      {selectedPokemon && (
        <div>
          {/* <h3>You selected: {selectedPokemon}</h3> */}
          <PokemonApi Pokemon={selectedPokemon} />
        </div>
      )}

    </div>
  );
}

export default PokemonDropdown;
