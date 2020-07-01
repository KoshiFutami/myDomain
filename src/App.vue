<template>
  <div id="app">
    <header class="header">
      <router-link to="/home">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/works">Works</router-link>
      <router-link to="/contact">Contact</router-link>
    </header>
    <div class="container py-5">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.header {
  height: 40px;
  background: #fff;
  box-shadow: 0 3px 3px rgba(0,0,0,.1);
  display: flex;
  justify-content: center;
  align-items: center;
}
.header a {
  text-decoration: none;
  color: #2c3e50;
  margin: 0 10px;
  padding: 3px 10px;
  background: #5ccebf;
}
</style>
