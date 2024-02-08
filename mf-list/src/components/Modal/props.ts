import { Pokemon } from "../Card/props";

export interface ModalProps {
    pokemon: Pokemon,
    closeModal: () => void
}

export interface Ability {
    ability: {
        name: string;
        url: string;
    };
}

export interface PokemonData {
    abilities: Ability[];
    name: string;
    sprites: {
        front_default: string;
    };
}