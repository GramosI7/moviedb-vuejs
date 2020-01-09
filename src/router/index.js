import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import Movies from "../views/Movies.vue";
import MovieInfo from "../views/MovieInfo.vue";
import MoviesGenre from "../views/MoviesGenre.vue";
import About from "../views/About.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/movies",
    name: "movies",
    component: Movies
  },
  {
    path: "/movie/genre/:id",
    name: "moviesGenre",
    props: true,
    component: MoviesGenre
  },
  {
    path: "/movie/:id",
    name: "movieInfo",
    props: true,
    component: MovieInfo
  },
  {
    path: "/about",
    name: "about",
    component: About
  }
];

const router = new VueRouter({
  routes
});

export default router;
