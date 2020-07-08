<template>
  <div id="app">
    <header class="header">
      <router-link to="/home" class="header__logo">Koshi Futami</router-link>
      <nav class="header__nav">
        <router-link to="/about" class="header__nav__item">About</router-link>
        <router-link to="/works" class="header__nav__item">Works</router-link>
        <router-link to="/contact" class="header__nav__item">Contact</router-link>
      </nav>
    </header>
    <main class="main container">
      <router-view/>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
