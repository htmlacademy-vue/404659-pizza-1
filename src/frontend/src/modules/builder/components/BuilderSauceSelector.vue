<template>
  <div class="ingredients__sauce">
    <p>Основной соус:</p>

    <label
      v-for="sauce in sauces"
      :key="sauce.id"
      class="radio ingredients__input"
    >
      <RadioButton
        name="sauce"
        :params="sauce"
        :checked="order.sauce === sauce.id"
        @selected="updateOrder(sauce, 'sauce')"
      />
      <span>
        {{ sauce.name }}
      </span>
    </label>
  </div>
</template>

<script>
import RadioButton from "@/common/components/RadioButton";
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "BuilderSauceSelector",
  components: { RadioButton },
  computed: {
    ...mapState("Builder", ["order"]),
    ...mapGetters("Builder", ["sauces"]),
  },
  methods: {
    ...mapActions("Builder", ["UPDATE_ORDER"]),
    updateOrder(selected, type) {
      this.UPDATE_ORDER([
        {
          value: selected.id,
          name: type,
        },
      ]);
    },
  },
};
</script>
