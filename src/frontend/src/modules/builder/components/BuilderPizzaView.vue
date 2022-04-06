<template>
  <AppDrop @drop="onDrop">
    <div class="content__constructor">
      <div :class="`pizza pizza--foundation--${dough}-${sauce}`">
        <div class="pizza__wrapper">
          <div
            v-for="ingredient of ingredients"
            :key="ingredient.id"
            :class="getClasses(ingredient)"
          ></div>
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
    getClasses(ingredient) {
      return [
        "pizza__filling",
        `pizza__filling--${ingredient.value}`,
        {
          "pizza__filling--second": ingredient.count === 2,
          "pizza__filling--third": ingredient.count === 3,
        },
      ];
    },
    onDrop(ingredient) {
      this.$emit("onDrop", ingredient);
    },
  },
  components: {
    AppDrop,
  },
};
</script>
