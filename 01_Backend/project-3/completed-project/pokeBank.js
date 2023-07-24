const data = [
    {
      id: 1,
      name: "Pikachu",
      type: "Electric",
      trainer: "Ash",
      date: new Date(Date.now() - 15000000),
      image: "https://www.giantbomb.com/a/uploads/scale_medium/0/6087/2437349-pikachu.png",
    },
    {
      id: 2,
      name: "Charizard",
      type: "Fire/Flying",
      trainer: "Ash",
      date: new Date(Date.now() - 90000000),
      image: "https://www.giantbomb.com/a/uploads/square_medium/13/135472/1891763-006charizard.png",
    },
    {
      id: 3,
      name: "Bulbasaur",
      type: "Grass/Poison",
      trainer: "Ash",
      date: new Date(Date.now() - 80000000),
      image: "https://archives.bulbagarden.net/media/upload/f/fb/0001Bulbasaur.png",
    },
    {
      id: 4,
      name: "Squirtle",
      type: "Water",
      trainer: "Ash",
      date: new Date(Date.now() - 70000000),
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    },
    {
      id: 5,
      name: "Jigglypuff",
      type: "Normal/Fairy",
      trainer: "Misty",
      date: new Date(Date.now() - 60000000),
      image: "https://archives.bulbagarden.net/media/upload/3/3a/0039Jigglypuff.png",
    },
    {
      id: 6,
      name: "Gengar",
      type: "Ghost/Poison",
      trainer: "Brock",
      date: new Date(Date.now() - 50000000),
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png",
    },
    {
      id: 7,
      name: "Eevee",
      type: "Normal",
      trainer: "Gary",
      date: new Date(Date.now() - 40000000),
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png",
    },
    {
      id: 8,
      name: "Snorlax",
      type: "Normal",
      trainer: "Ash",
      date: new Date(Date.now() - 30000000),
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png",
    },
    {
      id: 9,
      name: "Mewtwo",
      type: "Psychic",
      trainer: "Red",
      date: new Date(Date.now() - 20000000),
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png",
    },
    {
      id: 10,
      name: "Lugia",
      type: "Psychic/Flying",
      trainer: "Silver",
      date: new Date(Date.now() - 10000000),
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/249.png",
    },
];
​
const list = () => {
    return [...data]; // Notice that we're returning a copy of the array, so the original data is safe. This is called 'immutability'.
};
  
const find = (id) => {
    const pokemon = data.find((pokemon) => pokemon.id === +id);
    return { ...pokemon }; // Again, we copy the post data before returning so the original information is safe.
};
  
module.exports = { list: list, find: find };