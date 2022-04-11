<template>
  <div class="content__dough">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите тесто</h2>

      <div class="sheet__content dough" v-if="doughs.length">
        <label
          class="dough__input"
          v-for="dough in doughs"
          :key="dough.id"
          :class="`dough__input--${dough.value}`"
        >
          <RadioButton
            class="visually-hidden"
            name="dough"
            :params="dough"
            :checked="order.dough === dough.id"
            @updateOrder="$emit('selectDough', $event)"
          />
          <b>{{ dough.name }}</b>
          <span>{{ dough.description }}</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import RadioButton from "@/common/components/RadioButton";

export default {
  name: "BuilderDoughSelector",
  props: {
    doughs: {
      type: Array,
      default: () => [],
    },
    order: {
      type: Object,
      required: true,
    },
  },
  components: { RadioButton },
};
</script>
