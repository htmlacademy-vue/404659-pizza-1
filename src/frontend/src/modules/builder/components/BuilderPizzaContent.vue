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

    <BuilderPizzaView :dough="dough" :sauce="sauce" />
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
    dough: {
      type: String,
      required: true,
    },
    sauce: {
      type: String,
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
  },
  components: {
    BuilderPizzaView,
    BuilderPriceCounter,
  },
};
</script>
