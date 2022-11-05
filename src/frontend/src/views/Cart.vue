<template>
  <form action="test.html" method="post" class="layout-form">
    <main class="content cart">
      <div class="container">
        <div class="cart__title">
          <h1 class="title title--big">Корзина</h1>
        </div>
        <div class="sheet cart__empty" v-if="orders.length === 0">
          <p>В корзине нет ни одного товара</p>
        </div>
        <ul class="cart-list sheet" v-else>
          <li v-for="order in orders" :key="order.id" class="cart-list__item">
            <div class="product cart-list__product">
              <img
                src="@/assets/img/product.svg"
                class="product__img"
                width="56"
                height="56"
                alt="order.name"
              />
              <div class="product__text">
                <h2>{{ order.name }}</h2>
                <ul>
                  <li>{{ order.pizzaSize }}, {{ order.pizzaDough }}</li>
                  <li>Соус: томатный</li>
                  <li>Начинка: грибы, лук, ветчина, пармезан, ананас</li>
                </ul>
              </div>
            </div>
            <div class="counter cart-list__counter">
              <button
                type="button"
                class="counter__button counter__button--minus"
              >
                <span class="visually-hidden">Меньше</span>
              </button>
              <input
                type="text"
                name="counter"
                class="counter__input"
                value="1"
              />
              <button
                type="button"
                class="counter__button counter__button--plus counter__button--orange"
              >
                <span class="visually-hidden">Больше</span>
              </button>
            </div>
            <div class="cart-list__price">
              <b>{{ order.totalPrice }} ₽</b>
            </div>
            <div class="cart-list__button">
              <button type="button" class="cart-list__edit">Изменить</button>
            </div>
          </li>
        </ul>
        <div class="cart__additional" v-if="orders.length !== 0">
          <ul class="additional-list">
            <li class="additional-list__item sheet">
              <p class="additional-list__description">
                <img
                  src="@/assets/img/cola.svg"
                  width="39"
                  height="60"
                  alt="Coca-Cola 0,5 литра"
                />
                <span>Coca-Cola 0,5 литра</span>
              </p>
              <div class="additional-list__wrapper">
                <div class="counter additional-list__counter">
                  <button
                    type="button"
                    class="counter__button counter__button--minus"
                  >
                    <span class="visually-hidden">Меньше</span>
                  </button>
                  <input
                    type="text"
                    name="counter"
                    class="counter__input"
                    value="2"
                  />
                  <button
                    type="button"
                    class="counter__button counter__button--plus counter__button--orange"
                  >
                    <span class="visually-hidden">Больше</span>
                  </button>
                </div>
                <div class="additional-list__price">
                  <b>× 56 ₽</b>
                </div>
              </div>
            </li>
            <li class="additional-list__item sheet">
              <p class="additional-list__description">
                <img
                  src="@/assets/img/sauce.svg"
                  width="39"
                  height="60"
                  alt="Острый соус"
                />
                <span>Острый соус</span>
              </p>
              <div class="additional-list__wrapper">
                <div class="counter additional-list__counter">
                  <button
                    type="button"
                    class="counter__button counter__button--minus"
                  >
                    <span class="visually-hidden">Меньше</span>
                  </button>
                  <input
                    type="text"
                    name="counter"
                    class="counter__input"
                    value="2"
                  />
                  <button
                    type="button"
                    class="counter__button counter__button--plus counter__button--orange"
                  >
                    <span class="visually-hidden">Больше</span>
                  </button>
                </div>
                <div class="additional-list__price">
                  <b>× 30 ₽</b>
                </div>
              </div>
            </li>
            <li class="additional-list__item sheet">
              <p class="additional-list__description">
                <img
                  src="@/assets/img/potato.svg"
                  width="39"
                  height="60"
                  alt="Картошка из печи"
                />
                <span>Картошка из печи</span>
              </p>
              <div class="additional-list__wrapper">
                <div class="counter additional-list__counter">
                  <button
                    type="button"
                    class="counter__button counter__button--minus"
                  >
                    <span class="visually-hidden">Меньше</span>
                  </button>
                  <input
                    type="text"
                    name="counter"
                    class="counter__input"
                    value="2"
                  />
                  <button
                    type="button"
                    class="counter__button counter__button--plus counter__button--orange"
                  >
                    <span class="visually-hidden">Больше</span>
                  </button>
                </div>
                <div class="additional-list__price">
                  <b>× 56 ₽</b>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <CartForm v-if="orders.length !== 0" />
      </div>
    </main>
    <CartFooter v-if="orders.length !== 0" />
  </form>
</template>
<script>
import CartFooter from "@/modules/cart/components/CartFooter";
import CartForm from "@/modules/cart/components/CartForm";
import { mapGetters } from "vuex";

export default {
  name: "Cart",
  components: {
    CartFooter,
    CartForm,
  },
  computed: {
    ...mapGetters("Cart", ["orders"]),
  },
};
</script>
