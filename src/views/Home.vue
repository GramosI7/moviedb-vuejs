<template>
  <div class="home">
    <div class="container">
      <h1>MovieDb VueJS</h1>
      <SearchBar />
      <div class="container-movie">
        <Movie
          v-if="typeof movie === 'object' && Object.keys(movie).length != 0"
          :movie="movie"
        />

        <div v-if="typeof movie === 'string'">{{ movie }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import Movie from "@/components/Movie";
import { mapState } from "vuex";

export default {
  name: "home",
  components: {
    SearchBar,
    Movie
  },
  computed: {
    ...mapState(["movie", "error"])
  }
};
</script>

<style lang="scss" scoped>
.home {
  text-align: center;
  .container-movie {
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
  }
}
</style>
