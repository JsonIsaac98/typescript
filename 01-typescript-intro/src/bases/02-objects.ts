export const pokemonIds: any = [1, 20 , 30, 40, 50];

export interface Pokemon {
    id: number;
    name: string;
    type: string;
    base_experience: number;
}

export const bulbasaur: Pokemon = {
    id: 1,
    name: 'Bulbasaur',
    type: 'Grass',
    base_experience: 64
}

export const charmander: Pokemon = {
    id: 2,
    name: 'Charmander',
    type: 'Fire',
    base_experience: 62
}

export const pokemons: Pokemon[] = [];

pokemons.push(charmander, bulbasaur);

console.log(pokemons);