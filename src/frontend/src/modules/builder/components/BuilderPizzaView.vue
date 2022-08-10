<template>
  <AppDrop @drop="onDrop">
    <div class="content__constructor">
      <div
        :class="`pizza pizza--foundation--${currentDoughClass}-${currentSauceClass}`"
      >
        <div class="pizza__wrapper">
          <template v-for="ingredient of order.ingredients">
            <div
              :key="ingredient.id"
              class="pizza__filling"
              :class="`pizza__filling--${ingredient.value}`"
            ></div>
            <div
              v-if="ingredient.count >= 2"
              :key="`${ingredient.id}-second`"
              class="pizza__filling pizza__filling--second"
              :class="`pizza__filling--${ingredient.value}`"
            ></div>
            <div
              v-if="ingredient.count === 3"
              :key="`${ingredient.id}-third`"
              class="pizza__filling pizza__filling--third"
              :class="`pizza__filling--${ingredient.value}`"
            ></div>
          </template>
        </div>
      </div>
    </div>
  </AppDrop>
</template>

<script>
import AppDrop from "@/common/components/AppDrop";
import { mapState, mapGetters } from "vuex";

export default {
  name: "BuilderPizzaView",
  methods: {
    onDrop(ingredient) {
      this.$emit("onDrop", ingredient);
    },
  },
  components: {
    AppDrop,
  },
  computed: {
    ...mapState("Builder", ["order"]),
    ...mapGetters("Builder", ["currentDoughClass", "currentSauceClass"]),
  },
};
</script>
