<template>
  <AppDrop @drop="onDrop">
    <div class="content__constructor">
      <div :class="`pizza pizza--foundation--${dough}-${sauce}`">
        <div class="pizza__wrapper">
          <template v-for="ingredient of ingredients">
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

export default {
  name: "BuilderPizzaView",
  props: {
    dough: {
      type: String,
      required: true,
    },
    sauce: {
      type: String,
      required: true,
    },
    ingredients: {
      type: Array,
    },
  },
  methods: {
    onDrop(ingredient) {
      this.$emit("onDrop", ingredient);
    },
  },
  components: {
    AppDrop,
  },
};
</script>
