<template>
  <nav class="navbar">
    <div class="container-fluid">
      <router-link class="navbar__header" to="/">
        <h4 class="navbar__brand">movo</h4>
      </router-link>
      <div class="navbar__body">
        <div class="navbar__search">
          <transition name="search-slide" v-if="searchExpanded">
            <input id="navbarSearch" type="search" class="navbar__search-input" placeholder="Search our database" />
          </transition>
          <label for="navbarSearch" class="navbar__search-label" @click="toggleSearch">
            <span class="lnr lnr-magnifier"></span>
          </label>
        </div>
        <ul class="navbar__auth">
          <li class="navbar__auth-item">
            <router-link to="/login" class="navbar__auth-link">Sign In</router-link>
          </li>
        </ul>
        <div class="navbar__user">
          <p>Hi <span class="navbar__user-name">johndoe</span></p>
        </div>
      </div>
    </div>

    <div class="fixed-search" v-if="fixedSearchExpanded">
      <input id="fixedSearch" type="search" class="fixed-search__input" placeholder="" />
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
  data() {
    return {
      searchExpanded: false,
      fixedSearchExpanded: false
    };
  },
  methods: {
    toggleSearch() {
      const width = window.innerWidth;

      if (width < 468)
        this.fixedSearchExpanded = !this.fixedSearchExpanded;
      else
        this.searchExpanded = !this.searchExpanded;
    }
  }
}
</script>


<style lang="scss">
@import '../styles/global.scss';
@import '../styles/components/navbar.scss';
</style>
 