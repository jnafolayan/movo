<template>
  <div class="auth">
    <div class="container">
      <header class="auth__header">
        <h3 class="auth__header-big">Sign up for an account</h3>
      </header>
      <div class="auth-form">
        <p class="auth-form__error" v-if="authMessage">
          {{ authMessage }}
        </p>
        <form method="post" action="#" @submit.prevent="signup">
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
            <button type="submit" class="auth__button">SIGN UP</button>
          </div>

          <p class="auth-form__alt">
            or
            <router-link class="auth-form-_alt-link" :to="{ name: 'login' }">Sign in to your account</router-link>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      authMessage: null
    }
  },

  methods: {
    signup() {
      const _this = this;
      const { username, password } = this;

      // reset auth message
      this.authMessage = null;

      const fd = { username, password };
      this.$http.post('/users', fd)
        .then(redirect)
        .catch(handleSignupError);

      function redirect({ data: e }) {
        const payload = {
          username,
          token: e.data.token
        };
        _this.$store.dispatch('saveUser', payload);
        _this.$router.push({ name: 'login' });
      }

      function handleSignupError({ response }) {
        switch (response.status) {
          case 400:
            _this.authMessage = 'The username has been taken';
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
 