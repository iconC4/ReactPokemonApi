import React, { useState, useEffect } from 'react';
import { PokemonCard } from './PokemonCard';
import axios from "axios";

export function PokemonApi(props) {
    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${props.Pokemon}`);
                setPokemonData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [props.Pokemon]);

    if (!pokemonData) {
        return <div>Loading...</div>;
    }

    return (
        <>
        <PokemonCard pokemon={pokemonData}/>
        <div className='boxPokemon1'>
            <img src={pokemonData.sprites.other["showdown"].back_default} height={pokemonData.height * 15 } alt={pokemonData.name} />
        </div>
        </>
    );
}
