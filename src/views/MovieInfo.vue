<template>
  <div class="movieInfo">
    <div class="inner">
      <div v-if="loading">Loading...</div>
      <div v-else class="info">
        <iframe
          width="100%"
          height="715"
          frameborder="0"
          :src="`https://www.youtube.com/embed/${keyVideo}`"
        >
        </iframe>
        <h1>{{ movie.title }}</h1>
        <div class="info-content">
          <div class="info-content_left">
            <img :src="poster" alt="" />
          </div>
          <div class="info-content_right">
            <p>{{ movie.overview }}</p>
            <ul>
              <router-link
                :to="`/movie/genre/${genre.id}`"
                v-for="genre in movie.genres"
                :key="genre.name"
              >
                <li>
                  {{ genre.name }}
                </li>
              </router-link>
            </ul>
            <div class="date">Release date : {{ movie.release_date }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["id"],
  data() {
    return {
      movie: {},
      keyVideo: "",
      poster: "",
      loading: true
    };
  },
  created() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${this.id}?api_key=6942b7dc7c0044fc880daa8d4c8dd112&language=en-US`
      )
      .then(res => {
        this.movie = res.data;
        this.getVideo();
        this.getPoster();
      })
      .catch(err => console.log(err));
  },
  methods: {
    getVideo() {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${this.id}/videos?api_key=6942b7dc7c0044fc880daa8d4c8dd112&language=en-US`
        )
        .then(res => {
          console.log(res.data);
          this.keyVideo =
            res.data.results.length > 0
              ? res.data.results[0].key
              : "gkTb9GP9lVI";
          this.loading = false;
        })
        .catch(err => console.log(err));
    },
    getPoster() {
      axios
        .get(`http://image.tmdb.org/t/p/w185//${this.movie.poster_path}`)
        .then(res => {
          this.poster = res.config.url;
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style lang="scss" scoped>
.movieInfo {
  h1 {
    margin: 15px 0;
  }
  .info-content {
    display: flex;
    justify-content: space-around;
    .info-content_left {
      width: 20%;
      img {
        width: 100%;
      }
    }
    .info-content_right {
      width: 80%;
      margin-left: 20px;
      p {
        font-size: 18px;
      }
      ul {
        list-style: none;
        display: flex;
        margin: 15px 0;
        li {
          margin: 0 5px;
          background-color: #42b984;
          padding: 5px 10px;
          border-radius: 25px;
          &:first-child {
            margin-left: 0px;
          }
        }
      }
    }
  }
}
</style>