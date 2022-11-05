<template>
  <div class="content__pizza">
    <label class="input">
      <span class="visually-hidden">Название пиццы</span>
      <input
        type="text"
        name="pizza_name"
        placeholder="Введите название пиццы"
        :value="currentName"
        @input="updatePizzaName"
      />
    </label>

    <BuilderPizzaView @onDrop="onDrop" />
    <BuilderPriceCounter />
  </div>
</template>

<script>
import BuilderPizzaView from "@/modules/builder/components/BuilderPizzaView";
import BuilderPriceCounter from "@/modules/builder/components/BuilderPriceCounter";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "BuilderPizzaContent",
  methods: {
    ...mapActions("Builder", ["GET_NAME_PIZZA"]),
    updatePizzaName(event) {
      this.GET_NAME_PIZZA(event.target.value);
    },
    onDrop(ingredient) {
      this.$emit("onDrop", ingredient);
    },
  },
  components: {
    BuilderPizzaView,
    BuilderPriceCounter,
  },
  computed: {
    ...mapGetters("Builder", ["currentName"]),
  },
};
</script>
