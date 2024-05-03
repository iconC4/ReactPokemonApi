import React, { useState, useEffect } from 'react';
import axios from "axios";

export function BadPokemon() {
    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/charizard`);
                setPokemonData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [])

    if (!pokemonData) {
        return <div>Loading...</div>;
    }

    return (<>
        <div className='bad-pokemonCard'>
            <div className="pokemonStat">Name:<span>{pokemonData.name}</span></div>
            <div className="pokemonStat">Hp:<span>{pokemonData.stats[0].base_stat}</span></div>
            <div className="pokemonStat">Attack:<span>{pokemonData.stats[1].base_stat}</span></div>
            <div className="pokemonStat">Defense:<span>{pokemonData.stats[2].base_stat}</span></div>
            <div className='pokemonStat'>Skill: <span>{pokemonData.abilities.map(a => (
                    <b>
                        [ {a.ability.name} ]
                    </b>
                ))}</span></div>
            
        </div>
        <div className='bad-pokemon'>
            <img src={pokemonData.sprites.other["showdown"].front_default} height={pokemonData.height * 15} alt={pokemonData.name} />
        </div>
    </>)
}