// import { bulbasaur, pokemons } from './bases/02-objects';
// import { charmander } from './bases/03-classes';
// import { charmander } from './bases/04-injections';
// import { charmander } from './bases/05-decorators';
import { charmander } from './bases/06-decorators2';


import './style.css'
// import { name, age, isActive, templateString } from './bases/01-types.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>Hello vite!</h1>
  <p> name: ${charmander.name}</p>
  <p> id: ${charmander.id}</p>
  

`;