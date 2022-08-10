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
            :checked="order.size === size.id"
            @selected="updateOrder(size, 'diameter')"
          />
          <span> {{ size.name }}</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import RadioButton from "@/common/components/RadioButton";
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "BuilderSizeSelector",
  components: { RadioButton },
  computed: {
    ...mapState("Builder", ["order"]),
    ...mapGetters("Builder", ["sizes"]),
  },
  methods: {
    ...mapActions("Builder", ["UPDATE_ORDER"]),
    updateOrder(selected, type) {
      this.UPDATE_ORDER([
        {
          value: selected.id,
          name: type,
        },
      ]);
    },
  },
};
</script>
