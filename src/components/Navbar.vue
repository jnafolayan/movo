<template>
  <nav class="navbar">
    <div class="container">
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
        <div class="navbar__trigger">
          <span class="lnr lnr-menu" @click="toggleNavbar"></span>
        </div>
      </div>
    </div>

    <transition name="navbar-collapse" v-if="navbarExpanded">
      <ul class="navbar__collapse container">
        <li>
          <router-link to="/login" class="navbar__collapse-link">Sign In</router-link>
        </li>
      </ul>
    </transition>

    <div class="fixed-search" v-if="fixedSearchExpanded" @click="closeFixedSearch($event)">
      <input 
        id="fixedSearch" 
        type="search" 
        class="fixed-search__input" 
        placeholder="Search for a movie" 
        autofocus="true"
        @keydown.esc="closeFixedSearch($event, true)" />
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
  data() {
    return {
      navbarExpanded: false,
      searchExpanded: false,
      fixedSearchExpanded: false
    };
  },
  
  created() {
    this.$router.beforeEach((to, from, next) => {
      this.reset();
      next();
    });
  },

  methods: {
    toggleSearch() {
      const width = window.innerWidth;

      if (width < 496)
        this.fixedSearchExpanded = !this.fixedSearchExpanded;
      else
        this.searchExpanded = !this.searchExpanded;
    },

    toggleNavbar() {
      this.navbarExpanded = !this.navbarExpanded;
    },

    closeFixedSearch({ target }, dontCheckIfSearch) {
      if (dontCheckIfSearch || target.id != 'fixedSearch') {
        this.fixedSearchExpanded = false;
      }
    },

    reset() {
      this.fixedSearchExpanded = false;
      this.navbarExpanded = false;
      this.searchExpanded = false;
    }
  }
}
</script>


<style lang="scss">
@import '../styles/global.scss';
@import '../styles/components/navbar.scss';
</style>
 