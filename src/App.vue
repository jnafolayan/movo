<template>
  <div id="app">
    <main class="app-wrapper">
      <navbar />
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'app',
  components: { Navbar }
}
</script>

<style lang="scss">
#app {
  background-color: #dddddd;
}

.app-wrapper {
  width: 100vw;
  min-height: 100vh;
  max-width: 1240px;
  margin: 0 auto;
  background: #fff;
}
</style>
