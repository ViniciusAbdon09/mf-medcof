import React, { useEffect, useState } from "react"
import { ModalProps, PokemonData } from "./props"
import axios from "axios";

export const Modal = ({ closeModal, pokemon }: ModalProps) => {
    const [pokemonData, setPokemonData] = useState<PokemonData | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchPokemonData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
                setPokemonData(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching Pokemon data:', error);
                setLoading(false);
            }
        };

        fetchPokemonData();
    }, [pokemon.name]);


    return (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg p-6 max-w-xl" style={{ minWidth: '350px', minHeight: '350px' }}>
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-semibold">{pokemon.name}</h2>
                    <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                        <svg className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                        </svg>
                    </button>
                </div>
                {loading ? (
                    <div className="flex justify-center items-center mt-4">
                        <p className="text-xl font-semibold">Loading...</p>
                    </div>
                ) : pokemonData ? (
                    <div className="flex justify-center items-center flex-col">
                        <img src={pokemonData.sprites.front_default} alt={pokemonData.name} className="mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Abilities:</h3>
                        <div>
                            <ul>
                                {pokemonData.abilities.map((ability, index) => (
                                    <li key={index} className="mb-2">
                                        {ability.ability.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ) : (
                    <p>Sem mais informações para o pokemon {pokemon.name}</p>
                )}

            </div>
        </div>
    )
}