<template>
  <PokeHeader />
  <PokeContent msg="Welcome to Your Vue.js App"/>
</template>

<script>
import PokeContent from './components/PokeContent.vue'
import PokeHeader from './components/Header.vue'

export default {
  name: 'App',
  components: {
    PokeContent,
    PokeHeader,
  }
}
</script>

<style>

* {
    margin: 0;
  }
  
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>
