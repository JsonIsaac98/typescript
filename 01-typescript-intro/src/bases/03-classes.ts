export class Pokemon {
    
    // public id: number;
    // public name: string;

    constructor(
        public readonly id: number, 
        public name: string,
        public imageURL: string,
    ) {}

}

export const charmander = new Pokemon(4, 'Charmander', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png');


console.log(charmander); // Pokemon { id: 4, name: 'Charmander' }