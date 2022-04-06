<template>
  <div class="content__diameter">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите размер</h2>

      <div class="sheet__content diameter">
        <label
          v-for="size in sizes"
          :key="size.id"
          :class="`diameter__input diameter__input--${size.value}`"
        >
          <RadioButton
            class="visually-hidden"
            name="diameter"
            :params="size"
            :checked="selectedSize.id === size.id"
            @updateOrder="$emit('selectSize', $event)"
          />
          <span> {{ size.name }}</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import RadioButton from "@/common/components/RadioButton";

export default {
  name: "BuilderSizeSelector",
  props: {
    sizes: {
      type: Array,
      default: () => [],
    },
    selectedSize: {
      type: Object,
      required: true,
    },
  },
  components: { RadioButton },
};
</script>
