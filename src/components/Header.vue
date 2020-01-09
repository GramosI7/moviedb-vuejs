<template>
  <header>
    <nav>
      <div class="nav-left">
        <img alt="Vue logo" src="../assets/logo.png" />
      </div>
      <div class="nav-right">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/movies">Movies</router-link></li>
          <li><router-link to="/about">About</router-link></li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  // background-color: crimson;
  padding: 30px;
  a {
    font-weight: bold;
    color: #fff;
    text-decoration: none;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
  .nav-left {
    width: 30%;
    display: flex;
    justify-content: flex-start;
    img {
      height: 100%;
    }
  }

  .nav-right {
    width: 70%;
    ul {
      list-style: none;
      display: flex;
      justify-content: flex-end;
      li {
        margin: 0 10px;
      }
    }
  }
}
</style>