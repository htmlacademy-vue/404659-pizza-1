<template>
  <header class="header">
    <div class="header__logo">
      <router-link to="/" class="logo">
        <img
          src="@/assets/img/logo.svg"
          alt="V!U!E! Pizza logo"
          width="90"
          height="40"
        />
      </router-link>
    </div>
    <div class="header__cart">
      <router-link to="/cart">{{ 1000 }}₽</router-link>
    </div>
    <div class="header__user">
      <router-link v-if="!isLogged" to="/login" class="header__login">
        <span>Войти</span>
      </router-link>
      <router-link v-else to="/profile">
        <picture>
          <source
            type="image/webp"
            :srcset="`${user.avatar}    1x, ${user.avatar} 2x`"
          />
          <img
            :src="user.avatar"
            :srcset="user.avatar"
            :alt="user.name"
            width="32"
            height="32"
          />
        </picture>
        <span>{{ user.name }}</span>
      </router-link>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "AppLayoutHeader",
  computed: {
    ...mapGetters("Auth", ["user", "isLogged"]),
  },
  methods: {
    ...mapActions("Auth", ["LOGOUT"]),
    logout() {
      if (this.$route.path == "/profile" || this.$route.path == "/orders") {
        this.$router.push("/");
      }

      this.LOGOUT(false);
    },
  },
};
</script>

<style lang="scss" scoped>
.header__login {
  &::after {
    display: inline-block;

    width: 32px;
    height: 32px;
    margin-left: 8px;

    content: "";
    vertical-align: middle;

    background: url(../assets/img/login.svg) no-repeat center;
    background-size: auto 50%;
  }
}
</style>
