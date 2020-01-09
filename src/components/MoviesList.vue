<template>
  <div class="movies-list">
    <div class="inner">
      <div class="content-movie-list">
        <Movie v-for="movie in movieList" :key="movie.title" :movie="movie" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import Movie from "./Movie";
export default {
  name: "moviesList",
  components: { Movie },
  computed: {
    ...mapState(["movieList"])
  },
  created() {
    this.$store.dispatch("getData");
  }
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
      justify-content: space-between;
      flex-wrap: wrap;
    }
  }
}
</style>