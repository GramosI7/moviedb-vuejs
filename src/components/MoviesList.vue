<template>
  <div class="movies-list">
    <div class="inner">
      <GenreList />
      <div class="content-movie-list">
        <Movie v-for="movie in movieList" :key="movie.id" :movie="movie" />
      </div>
    </div>
  </div>
</template>

<script>
import Movie from "./Movie";
import GenreList from "./GenreList";
export default {
  name: "moviesList",
  components: { Movie, GenreList },
  props: ["movieList"]
};
</script>

<style lang="scss" scoped>
.movies-list {
  // height: 100%;
  .inner {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 20px;
    .content-movie-list {
      margin: 20px 0;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
    }
  }
}
</style>