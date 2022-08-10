<template>
  <input
    type="radio"
    :value="params.value"
    :checked="checked"
    @change="$emit('selected')"
  />
</template>

<script>
export default {
  name: "RadioButton",
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
    params: {
      type: Object,
      required: true,
    },
  },
};
</script>
