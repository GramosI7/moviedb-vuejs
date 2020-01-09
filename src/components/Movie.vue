<template>
  <router-link :to="/movie/ + movie.id">
    <div class="movie">
      <img :src="poster" alt="" />
      <div class="content">
        <h3>{{ textTruncate(movie.title, 20) }}</h3>
        <p>
          {{ textTruncate(movie.overview, 130) }}
        </p>
        <div class="rating">
          <star-rating
            :rating="movie.vote_average"
            :show-rating="false"
            :read-only="true"
            :max-rating="10"
            :star-size="15"
            inactive-color="#fff"
            active-color="#42B984"
            border-color="#42B984"
            :border-width="1"
          ></star-rating>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import axios from "axios";
import StarRating from "vue-star-rating";

export default {
  name: "movie",
  components: {
    StarRating
  },
  props: ["movie"],
  data() {
    return {
      loading: true,
      poster: ""
    };
  },
  created() {
    axios
      .get(`http://image.tmdb.org/t/p/w185//${this.$props.movie.poster_path}`)
      .then(res => {
        this.poster = res.config.url;
      });
  },
  methods: {
    textTruncate(str, length = 100, ending = "...") {
      if (str.length > length) {
        return str.substring(0, length - ending.length) + ending;
      } else {
        return str;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: #fff;
  margin: 20px 0px;
}
.movie {
  width: 250px;
  height: 100%;
  background: rgba(66, 185, 131, 0.3);
  border-radius: 5px;
  overflow: hidden;
  img {
    width: 100%;
    height: auto;
  }
  .content {
    padding: 10px;
    position: relative;
    h3 {
      margin-bottom: 10px;
    }
    p {
      margin-bottom: 10px;
    }
    .rating {
      margin-top: 10px;
    }
  }
}
</style>