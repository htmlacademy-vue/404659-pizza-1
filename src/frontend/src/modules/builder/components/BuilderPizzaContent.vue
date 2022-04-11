<template>
  <div class="content__pizza">
    <label class="input">
      <span class="visually-hidden">Название пиццы</span>
      <input
        type="text"
        name="pizza_name"
        placeholder="Введите название пиццы"
        :value="pizzaName"
        @input="updatePizzaName"
      />
    </label>

    <BuilderPizzaView
      :dough="doughClass"
      :sauce="sauceClass"
      :ingredients="order.ingredients"
      @onDrop="onDrop"
    />
    <BuilderPriceCounter
      :pizzaPrice="pizzaPrice"
      :isDisabledButton="isDisabledButton"
    />
  </div>
</template>

<script>
import BuilderPizzaView from "@/modules/builder/components/BuilderPizzaView";
import BuilderPriceCounter from "@/modules/builder/components/BuilderPriceCounter";

export default {
  name: "BuilderPizzaContent",
  props: {
    pizzaPrice: {
      type: Number,
      required: true,
    },
    pizzaName: {
      type: String,
      default: "",
    },
    order: {
      type: Object,
      required: true,
    },
    isDisabledButton: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    updatePizzaName(event) {
      this.$emit("getPizzaName", event.target.value);
    },
    onDrop(ingredient) {
      this.$emit("onDrop", ingredient);
    },
  },
  computed: {
    doughClass() {
      const doughClass = this.order.dough === 1 ? "small" : "big";
      return doughClass;
    },
    sauceClass() {
      const sauceClass = this.order.sauce === 1 ? "tomato" : "creamy";
      return sauceClass;
    },
  },
  components: {
    BuilderPizzaView,
    BuilderPriceCounter,
  },
};
</script>
