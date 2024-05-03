import React, { useState, useEffect } from 'react';

export function PokemonCard(props) {
    return (
        <>
            <div className="pokemonCard">
                <div className="pokemonStat">Name: <span>{props.pokemon.name}</span></div>
                <div className="pokemonStat">Hp: <span>{props.pokemon.stats[0].base_stat}</span></div>
                <div className="pokemonStat">Attack: <span>{props.pokemon.stats[1].base_stat}</span></div>
                <div className="pokemonStat">Defense: <span>{props.pokemon.stats[2].base_stat}</span></div>
                <div className="pokemonStat">Speed: <span>{props.pokemon.stats[5].base_stat}</span></div>
                <div className='pokemonStat'>Skill: <span>{props.pokemon.abilities.map(a => (
                    <b>
                        [ {a.ability.name} ]
                    </b>
                ))}</span></div>
            </div>

        </>
    )
}