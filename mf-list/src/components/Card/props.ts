export interface Pokemon {
    name: string;
    url: string;
}

export interface CardProps {
    pokemon: Pokemon,
    onClickCard: (pokemon: Pokemon) => void
} 