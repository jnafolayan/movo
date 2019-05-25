<template>  
  <div id="home">
    <movie-carousel :movies="randomMovies" />
    <div class="top-rated">
      <div class="container">
        <section class="section">
          <h3 class="section__heading">Top rated of all time</h3>
          <movie-carousel :movies="topRated" :spaced="true" />
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
      const result = this.movies.filter(movie => Math.random() > 0.45);
      if (result.length > 20)
        result.length = 20;
      return result;
    },

    topRated() {
      const result = this.movies.sort((a, b) => b.rating - a.rating);
      if (result.length > 20)
        result.length = 20;
      return result;
    }
  }
}
</script>

