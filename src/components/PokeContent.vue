<template>
  <div class="contentContainer">
    <div class="cardContainer" v-for="pokemon in pokemons" :key="pokemon.id">
    <img v-bind:src="`${pokemon.img}`" v-bind:alt="`${pokemon.name}`" class='pokeImg'  />
        <div class="infoBox">
          <h4>{{ pokemon.name }}</h4>
          <div :class="pokemon.type" class="typeBox" ><p>{{ pokemon.type }}</p></div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data() {
    return {
      pokemons: [
        { name: 'Pikachu', img: require('../assets/Pikachu.webp'), type: 'Electric', id: 1},
        { name: 'Arcanine', img: require('../assets/Arcanine.png'), type: 'Fire', id: 2},
        { name: 'Groudon', img: require('../assets/Groudon.png'), type: 'Ground', id: 3},
        { name: 'Mudkip', img: require('../assets/Mudkip.png'), type: 'Water', id: 4},
        { name: 'Jigglypuff', img: require('../assets/Jigglypuff.png'), type: 'Fairy', id: 5},
        { name: 'Mareep', img: require('../assets/Mareep.png'), type: 'Electric', id: 6},
        { name: 'Espeon', img: require('../assets/Espeon.png'), type: 'Psychic', id: 7},
        { name: 'Teddiursa', img: require('../assets/Teddiursa.png'), type: 'Normal', id: 8},
        { name: 'Bulbasaur', img: require('../assets/Bulbasaur.png'), type: 'Poison', id: 9},
        { name: 'Charmander', img: require('../assets/Charmander.png'), type: 'Fire', id: 10},
      ]
    }
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.contentContainer {
  padding-top: 4rem;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}

.cardContainer {
    width: 14rem;
    height: 20rem;
    background-color: rgb(243, 243, 243);
}

.cardContainer:hover {
    background-color: rgb(209, 209, 209);
}

.pokeImg {
  margin-top: 1rem;
  width: 12.5rem;
}

.infoBox {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 2.5rem;
}

.typeBox {
  width: 4rem;
  height: 2rem;
  border-radius: 3px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.Electric {
  background-color: #EFE727;
}

.Fire {
  background-color: #EF9327;
  color: white;
}

.Ground {
  background-color: #a5a480;
  color: white;
}

.Poison {
  background-color: #B694ED;
  color: white;
}

.Normal {
  background-color: rgb(164, 164, 164);
}

.Fairy {
  background-color: rgb(255, 192, 227);
}

.Water {
  background-color: rgb(77, 130, 221);
  color: white;
}

.Psychic {
  background-color: rgb(255, 110, 170);
  color: white;
}

</style>
