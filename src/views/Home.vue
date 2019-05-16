<template>  
  <div id="home">
    <movie-carousel :movies="randomMovies" />
    <div class="popular">
      <div class="container">
        <section class="section">
          <h3 class="section__heading">Popular movies this week</h3>
          <movie-carousel :movies="popularMovies" :spaced="true" />
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import MovieCarousel from '../components/MovieCarousel.vue';

import movies from '../seeds/movies';

export default {
  name: 'home',
  components: { MovieCarousel },
  data() {
    return {
      movies
    }
  },
  computed: {
    randomMovies() {
      const result = this.movies.filter(movie => Math.random() > 0.5);
      if (result.length > 20)
        result.length = 20;
      return result;
    },

    popularMovies() {
      const result = this.movies.filter(movie => Math.random() > 0.5);
      if (result.length > 20)
        result.length = 20;
      return result;
    }
  }
}
</script>

