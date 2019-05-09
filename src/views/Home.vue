<template>  
  <div id="home">
    <movie-carousel />
  </div>
</template>

<script>
import MovieCarousel from '../components/MovieCarousel';

export default {
  name: 'home',
  components: { MovieCarousel }
}
</script>

