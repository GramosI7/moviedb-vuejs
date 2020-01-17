<template>
  <div class="inner">
    <input
      v-on:keyup.enter="searchMovie"
      v-model="value"
      placeholder="Search your movie"
      type="text"
    />
  </div>
</template>

<script>
import "animate.css";

export default {
  name: "SearchBar",
  data() {
    return {
      value: ""
    };
  },
  methods: {
    searchMovie() {
      this.$store.dispatch("getMovie", { name: this.value });
    }
  }
};
</script>

<style lang="scss" scoped>
input {
  margin-top: 20px;
  width: 60%;
  padding: 10px;
  border: none;
  border-bottom: 2px solid green;
  background: inherit;
  color: #fff;
  font-size: 18px;
  letter-spacing: 1px;
  outline: none;
}
</style>