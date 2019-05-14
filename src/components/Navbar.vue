<template>
  <nav class="navbar">
    <div class="container">
      <router-link class="navbar__header" to="/">
        <h4 class="navbar__brand">movo</h4>
      </router-link>
      <div class="navbar__body">
        <div class="navbar__search">
          <input id="navbarSearch" type="search" class="navbar__search-input" placeholder="Search our database" />
          <label for="navbarSearch"><span class="lnr lnr-search"></span></label>
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
  </nav>
</template>

<style lang="scss">
@import '../styles/global.scss';
@import '../styles/components/navbar.scss';
</style>
