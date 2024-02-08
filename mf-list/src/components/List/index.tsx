import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Pokemon } from '../Card/props';
import PokemonCard from '../Card';
import { Modal } from '../Modal';

export const List: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [offset, setOffset] = useState<number>(0);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([]);
  const debounceTimer = useRef<number | null>(null);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);


  useEffect(() => {
    const loadPokemons = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=30`);
        const newPokemons: Pokemon[] = response.data.results;
        setPokemons(prevPokemons => [...prevPokemons, ...newPokemons]);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching pokemons:', error);
        setLoading(false);
      }
    };

    loadPokemons();
  }, [offset]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight
      ) {
        setOffset(prevOffset => prevOffset + 30);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    debounceTimer.current = window.setTimeout(() => {
      setFilteredPokemons(
        pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }, 300);

    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, [searchTerm, pokemons]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const openModal = (pokemon: Pokemon) => {
    setSelectedPokemon(pokemon);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPokemon(null);
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto p-4">
      <input
        type="text"
        placeholder="Search Pokémon..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
      />

      {filteredPokemons.length === 0 && filteredPokemons.length === 0 && !loading && (
        <div className="bg-white rounded-md shadow-md p-6 mt-4">
          <p className="text-xl text-center font-semibold text-gray-800">Nenhum pokemon encontrado.</p>
        </div>)}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {filteredPokemons.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} onClickCard={openModal} />
        ))}
      </div>

      {isModalOpen && selectedPokemon && (
        <Modal pokemon={selectedPokemon} closeModal={closeModal} />
      )}

      {loading && (
        <div className="flex justify-center items-center mt-4">
          <p className="text-xl font-semibold">Loading...</p>
        </div>
      )}
    </div>
  );
};
