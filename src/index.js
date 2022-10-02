import Vue from "vue";
import Router from "vue-router";
import PokeContent from "./components/PokeContent.vue";
import SinglePokePage from "./components/SinglePokePage.vue";

Vue.use(Router);

export default new Router({
 mode: 'hash',
  routes: [
    { path: "/", name: "PokeContent", component: PokeContent },
    { path: "/h", name: "SinglePokePage", component: SinglePokePage },
  ],
});
