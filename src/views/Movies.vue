<template>
  <div class="movies">
    <h1>Movies Page</h1>
    <MoviesList />
  </div>
</template>

<script>
import MoviesList from "../components/MoviesList";
export default {
  name: "movies",
  components: {
    MoviesList
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