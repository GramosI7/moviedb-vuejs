<template>
  <div class="movies">
    <h1>Movies Page</h1>
    <MoviesList :movieList="movieList" />
  </div>
</template>

<script>
import MoviesList from "../components/MoviesList";
import { mapState } from "vuex";

export default {
  name: "movies",
  components: {
    MoviesList
  },
  computed: {
    ...mapState(["movieList"])
  },
  created() {
    this.$store.dispatch("getData");
  }
};
</script>

<style lang="scss" scoped>
.movies {
  height: 100vh;
  h1 {
    text-align: center;
  }
}
</style>