<template>
    <div class="cardContainer" v-for="pokemon in pokemons" :key="pokemon.id">
        <p>{{ pokemon.name }}</p>
    </div>
</template>

<script>
    export default {
  name: 'PokeCard',
  data() {
    return {
      pokemons: [
        { name: 'Pikachu', type: 'Electric', id: 1},
        { name: 'Arcanine', type: 'Fire', id: 2},
        { name: 'Groudon', type: 'Ground', id: 3},
        { name: 'Mudkip', type: 'Water', id: 4},
        { name: 'Jigglypuff', type: 'Fairy', id: 5},
        { name: 'Mareep', type: 'Electric', id: 6},
        { name: 'Espeon', type: 'Psychic', id: 7},
        { name: 'Teddiursa', type: 'Normal', id: 8},
        { name: 'Bulbasaur', type: 'Poison', id: 9},
        { name: 'Charmander', type: 'Fire', id: 10},
      ]
    }
  },
  methods: {
    debug(event) {
      console.log(event.pokemons);
    },
  }
}
</script>

<style>

.cardContainer {
    width: 10rem;
    height: 16rem;
    background-color: darkcyan;
}

</style>