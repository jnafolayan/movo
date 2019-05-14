<template>
  <div class="movie-carousel">
    <div class="movie-carousel__items">
      <router-link
        class="movie-carousel__item"
        to="{ name: 'movie', params: { slug: movie.slug } }"
        v-for="movie in movies"
        :key="movie.slug"
        :style="{ 'background-image': 'url('+ movie.coverArt + ')' }"
      >
        <div class="movie-carousel__item-desc">
          <h4 class="movie-carousel__item-name">{{ movie.title }}</h4>
          <p><small>{{ movie.genre }}</small></p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'movie-carousel',
  data() {
    return {
      movies: []
    };
  },
  created() {
    const movie = {
      slug: 'hello-word-f83fj',
      title: 'Hello World',
      genre: 'Comedy, Drama'
    };
    for (let i = 0; i < 10; i++)
      this.movies.push(create());

    function create() {
      let m = Object.create(movie);
      m.slug = Math.random().toString(32).substring(2);
      return m;
    }
  }
}
</script>

<style lang="scss">
@import '../styles/global.scss';
@import '../styles/components/movie-carousel.scss';
</style>
