<template>
  <div class="counter counter--orange ingredients__counter">
    <button
      type="button"
      name="minus"
      class="counter__button counter__button--minus"
      :disabled="counterValue === 0 ? true : false"
      @click="changeCounter"
    >
      <span class="visually-hidden">Меньше</span>
    </button>
    <input
      type="text"
      :name="inputName"
      class="counter__input"
      :value="counterValue"
      readonly
    />
    <button
      type="button"
      name="plus"
      class="counter__button counter__button--plus"
      :disabled="counterValue >= 3 ? true : false"
      @click="changeCounter"
    >
      <span class="visually-hidden">Больше</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "ItemCounter",
  props: {
    counterValue: {
      type: Number,
      default: 0,
    },
    inputName: {
      type: String,
    },
  },
  methods: {
    changeCounter(event) {
      this.$emit("updateOrder", {
        buttonName: event.target.name,
        inputName: this.inputName,
        count: this.counterValue,
      });
    },
  },
};
</script>
