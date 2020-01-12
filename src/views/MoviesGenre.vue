<template>
  <div>
    <div class="movie-genre">
      <h1 v-if="nameGenreLength > 0">{{ this.nameGenre[0].name }}</h1>
      <h1 v-else>Waiting...</h1>
      <MoviesList :movieList="movieList" />
    </div>
  </div>
</template>

<script>
import MoviesList from "../components/MoviesList";
import { mapState } from "vuex";
import axios from "axios";

export default {
  name: "moviesGenre",
  components: {
    MoviesList
  },
  props: ["id"],
  data() {
    return { idActu: "", nameGenre: [] };
  },
  computed: {
    ...mapState(["movieList"]),
    nameGenreLength: function() {
      return this.nameGenre.length;
    }
  },
  watch: {
    idActu: function() {
      this.getGenre();
    }
  },
  created() {
    this.idActu = this.id;
    this.getGenre();
    this.$store.dispatch("getDataGenre", {
      id: this.id
    });
  },
  methods: {
    getGenre() {
      axios
        .get(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=6942b7dc7c0044fc880daa8d4c8dd112&language=en-US`
        )
        .then(
          res =>
            (this.nameGenre = res.data.genres.filter(
              genre => genre.id == this.id
            ))
        );
    }
  },
  beforeRouteUpdate(to, from, next) {
    this.idActu = to.params.id;
    this.$store.dispatch("getDataGenre", {
      id: this.idActu
    });
    next();
  }
};
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
}
</style>