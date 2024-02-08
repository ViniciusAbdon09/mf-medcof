import React from 'react';
import { CardProps } from './props';

const PokemonCard = ({pokemon, onClickCard}: CardProps) => {
    return (
        <div key={pokemon.url} className="border border-gray-300 rounded p-4 flex flex-col justify-between bg-white" onClick={() => onClickCard(pokemon)}>
            <h2 className="text-lg font-semibold mb-2">{pokemon.name}</h2>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/').slice(-2, -1)}.png`} alt={pokemon.name} className="mx-auto" />
        </div>
    );
};

export default PokemonCard;
