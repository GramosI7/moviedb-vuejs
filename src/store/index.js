import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movieList: [],
    movie: {}
  },
  getters: {
    theMovie(state) {
      return state.movie;
    }
  },
  mutations: {
    setData(state, data) {
      state.movieList = data;
    },
    setMovie(state, data) {
      state.movie = data;
    }
  },
  actions: {
    async getMovie(context, payload) {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=6942b7dc7c0044fc880daa8d4c8dd112&language=en-US&query=${payload.name}&page=1&include_adult=false`
      );
      console.log(data);
      if (data.results.length <= 0) {
        context.commit("setMovie", "error not movie found");
      } else {
        context.commit("setMovie", data.results[0]);
      }
    },
    async getData(context) {
      let data = (
        await axios.get(
          "https://api.themoviedb.org/3/discover/movie?api_key=6942b7dc7c0044fc880daa8d4c8dd112&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
        )
      ).data;
      context.commit("setData", data.results);
    },
    async getDataGenre(context, payload) {
      let data = (
        await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=6942b7dc7c0044fc880daa8d4c8dd112&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${payload.id}`
        )
      ).data;
      context.commit("setData", data.results);
    }
  },
  modules: {}
});
