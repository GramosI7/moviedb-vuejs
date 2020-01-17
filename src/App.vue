<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  components: {
    Header
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
}
body {
  background: #2c3e50;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #fff;
}
.inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
a {
  text-decoration: none;
  color: #fff;
}
</style>
