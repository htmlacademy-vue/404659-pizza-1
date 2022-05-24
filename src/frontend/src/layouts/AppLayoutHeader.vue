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
      <router-link to="/cart">{{ pizzaPrice }} ₽</router-link>
    </div>
    <div class="header__user">
      <router-link v-if="!isAuth" to="/login" class="header__login">
        <span>Войти</span>
      </router-link>
      <router-link v-else to="/profile">
        <picture>
          <source
            type="image/webp"
            srcset="
              @/assets/img/users/user5.webp    1x,
              @/assets/img/users/user5@2x.webp 2x
            "
          />
          <img
            src="@/assets/img/users/user5.jpg"
            srcset="@/assets/img/users/user5@2x.jpg"
            alt="Василий Ложкин"
            width="32"
            height="32"
          />
        </picture>
        <span>Василий Ложкин</span>
      </router-link>
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
    pizzaPrice: {
      type: Number,
      default: 0,
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
