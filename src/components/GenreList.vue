<template>
  <div class="genre-list">
    <ul>
      <router-link
        :to="`/movie/genre/${genre.id}`"
        v-for="genre in listGenre"
        :key="genre.name"
        @click="whoGenre(genre)"
      >
        <li>
          {{ genre.name }}
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "genreList",
  data() {
    return {
      listGenre: []
    };
  },
  methods: {
    whoGenre(genre) {
      console.log(genre);
    }
  },
  created() {
    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=6942b7dc7c0044fc880daa8d4c8dd112&language=en-US`
      )
      .then(res => {
        this.listGenre = res.data.genres;
      });
  }
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin: 15px 0;
  li {
    margin: 5px;
    background-color: #42b984;
    padding: 5px 10px;
    border-radius: 25px;
    &:first-child {
      margin-left: 0px;
    }
  }
}
</style>