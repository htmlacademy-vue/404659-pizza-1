<template>
  <div class="content__dough">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите тесто</h2>

      <div class="sheet__content dough">
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
            @selected="updateOrder(dough, 'dough')"
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
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "BuilderDoughSelector",
  components: { RadioButton },
  computed: {
    ...mapState("Builder", ["order"]),
    ...mapGetters("Builder", ["doughs"]),
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
