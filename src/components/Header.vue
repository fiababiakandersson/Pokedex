<template>
    <div class="headerContainer">
        <img class="logo" src='../assets/PokemonLogo.png'>
        <ul class="navBar">
            <li>Generations</li>
            <li>Types</li>
            <li>Favourites</li>
        </ul>
    </div>
</template>

<script>
    export default {
  name: 'PokeHeader',
  data() {
    return {
        image: '../assets/PokemonLogo.png'
    }
  }
}
</script>

<style>

.headerContainer {
    background-color: #EF5350;
    height: 6.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
}

.logo {
    width: auto;
    height: 3.5rem;
    padding-left: 2rem;
}

.navBar {
    display: flex;
    list-style: none;
    padding: 0;
    font-weight: bolder;
    justify-content: space-evenly;
    width: 25rem;
    padding-right: 1.5rem;
}

.navBar li:hover {
    cursor: pointer;
}

</style>