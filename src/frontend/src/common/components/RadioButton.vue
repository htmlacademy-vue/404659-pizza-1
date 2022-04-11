<template>
  <input
    type="radio"
    :value="params.value"
    :checked="checked"
    @click="$emit('updateOrder', params)"
  />
</template>

<script>
export default {
  name: "RadioButton",
  props: {
    params: {
      type: Object,
      required: true,
    },
    checked: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
