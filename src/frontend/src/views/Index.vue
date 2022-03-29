<template>
  <div>
    <AppLayout />
    <main class="content">
      <form action="#" method="post">
        <div class="content__wrapper">
          <h1 class="title title--big">Конструктор пиццы</h1>

          <BuilderDoughSelector :doughs="doughs" />
          <BuilderSizeSelector :sizes="sizes" />
          <BuilderIngredientsSelector
            :sauces="sauces"
            :ingredients="ingredients"
          />

          <div class="content__pizza">
            <label class="input">
              <span class="visually-hidden">Название пиццы</span>
              <input
                type="text"
                name="pizza_name"
                placeholder="Введите название пиццы"
              />
            </label>

            <div class="content__constructor">
              <div class="pizza pizza--foundation--big-tomato">
                <div class="pizza__wrapper">
                  <div class="pizza__filling pizza__filling--ananas"></div>
                  <div class="pizza__filling pizza__filling--bacon"></div>
                  <div class="pizza__filling pizza__filling--cheddar"></div>
                </div>
              </div>
            </div>

            <div class="content__result">
              <p>Итого: 0 ₽</p>
              <button type="button" class="button" disabled>Готовьте!</button>
            </div>
          </div>
        </div>
      </form>
    </main>
  </div>
</template>

<script>
import pizza from "@/static/pizza.json";
import {
  normalizeDough,
  normalizeSize,
  normalizeSauce,
  normalizeIngredient,
} from "@/common/helpers.js";
import AppLayout from "@/layouts/AppLayout.vue";
import BuilderDoughSelector from "@/modules/builder/components/BuilderDoughSelector";
import BuilderSizeSelector from "@/modules/builder/components/BuilderSizeSelector";
import BuilderIngredientsSelector from "@/modules/builder/components/BuilderIngredientsSelector";

export default {
  data() {
    return {
      doughs: normalizeDough(pizza.dough),
      sizes: normalizeSize(pizza.sizes),
      sauces: normalizeSauce(pizza.sauces),
      ingredients: normalizeIngredient(pizza.ingredients),
    };
  },
  components: {
    AppLayout,
    BuilderDoughSelector,
    BuilderSizeSelector,
    BuilderIngredientsSelector,
  },
};
</script>

<style lang="scss"></style>
