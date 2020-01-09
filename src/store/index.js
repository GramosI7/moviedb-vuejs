import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movieList: []
  },
  mutations: {
    setData(state, data) {
      state.movieList = data;
    }
  },
  actions: {
    async getData(context) {
      let data = (
        await axios.get(
          "https://api.themoviedb.org/3/discover/movie?api_key=6942b7dc7c0044fc880daa8d4c8dd112&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
        )
      ).data;
      // eslint-disable-next-line no-console
      console.warn(data);
      context.commit("setData", data.results);
    }
  },
  modules: {}
});
