<template>
  <div class="content__constructor">
    <div :class="`pizza pizza--foundation--${dough}-${sauce}`">
      <div class="pizza__wrapper">
        <div class="pizza__filling pizza__filling--ananas"></div>
        <div class="pizza__filling pizza__filling--bacon"></div>
        <div class="pizza__filling pizza__filling--cheddar"></div>
      </div>
    </div>
  </div>
</template>

<script>
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
  },
};
</script>
