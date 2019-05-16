<template>
  <div class="movie-carousel">
    <div 
      :class="{ 'movie-carousel__items': true, 'movie-carousel__items--spaced': spaced }">
      <router-link
        class="movie-carousel__item"
        to="{ name: 'movie', params: { slug: movie.slug } }"
        v-for="movie in movies"
        :key="movie.slug"
        :style="{ 'background-image': 'url('+ movie.coverArt + ')' }">
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
  props: ['movies', 'spaced']
}
</script>

<style lang="scss">
@import '../styles/global.scss';
@import '../styles/components/movie-carousel.scss';
</style>
