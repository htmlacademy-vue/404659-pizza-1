<template>
  <input
    type="radio"
    :value="params.value"
    :checked="params.checked"
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
  },
};
</script>
