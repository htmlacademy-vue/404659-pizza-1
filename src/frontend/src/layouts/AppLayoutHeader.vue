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
      <a href="cart.html">0 ₽</a>
    </div>
    <div class="header__user" v-if="isAuth == false">
      <a href="#" class="header__login"><span>Войти</span></a>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppLayoutHeader",

  props: {
    isAuth: {
      type: Boolean,
      required: true,
      default: false,
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
