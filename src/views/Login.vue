<template>
  <div class="auth">
    <div class="container">
      <header class="auth__header">
        <h3 class="auth__header-big">The power is in your hands</h3>
        <p class="auth__header-small">Sign in to rate movies</p>
      </header>
      <div class="auth-form">
        <p class="auth-form__error" v-if="authMessage">
          {{ authMessage }}
        </p>
        <form method="post" action="#" @submit.prevent="login">
          <div class="form-group">
            <input type="text" name="username" id="username" placeholder="Enter your username" v-model="username" required>
          </div>
          <div class="form-group">
            <input type="password" name="password" id="password" ref="password" placeholder="Enter your password" v-model="password" required>
            <p class="form-group__action">
              <input type="checkbox" id="showpass" @change="togglePassVisibility">
              <label for="showpass">Show</label>
            </p>
          </div>
          <div class="form-group">
            <button type="submit" class="auth__button">SIGN IN</button>
          </div>

          <p class="auth-form__alt">
            or 
            <router-link class="auth-form-_alt-link" :to="{ name: 'signup' }">Create a new account</router-link>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',

  data() {
    return {
      username: '',
      password: '',
      authMessage: null
    }
  },

  methods: {
    togglePassVisibility() {
      const $el = this.$refs.password;
      const type = $el.getAttribute('type');
      if (type == 'text')
        $el.setAttribute('type', 'password');
      else
        $el.setAttribute('type', 'text');
    },

    login() {
      const _this = this;
      const { username, password } = this;

      // reset auth message
      this.authMessage = null;

      const fd = { username, password };
      this.$http.post('/users/login', fd)
        .then(redirect)
        .catch(handleLoginError);

      function redirect(response) {
        _this.$router.push({ name: 'home' });
      }

      function handleLoginError({ response }) {
        switch (response.status) {
          case 401:
            _this.authMessage = 'Your login details are incorrect';
            break;
          case 500:
          default:
            _this.authMessage = 'An error occured while signing up';
            break;
        }
      }
    },

    togglePassVisibility() {
      const $el = this.$refs.password;
      const type = $el.getAttribute('type');
      if (type == 'text')
        $el.setAttribute('type', 'password');
      else
        $el.setAttribute('type', 'text');
    }
  }
}
</script>

<style lang="scss">
@import '../styles/global.scss';
@import '../styles/views/auth.scss';
</style>
 