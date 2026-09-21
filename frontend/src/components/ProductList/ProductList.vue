<template>
  <div class="ProductList">
    <div class="w3-row-padding w3-center products" style="margin-top: 64px">
      <div v-for="pizza in pizzas" :key="pizza.id" class="w3-quarter w3-margin-bottom product">
        <router-link :to="{ name: 'ProductDetail', params: { id: pizza.id } }">
          <img :alt="pizza.name" :src="pizza.image" class="image" data-test="image" style="width: 100%"/>
        </router-link>
        <p class="w3-large w3-margin-top w3-text-orange name">
          {{ pizza.name }}
          <span v-if="quantityInCartGetter(pizza) > 0" class="badge rounded-pill badge-product-list badge-add">{{
              quantityInCartGetter(pizza)
            }}</span>
        </p>
        <p class="w3-large w3-margin-top price">${{ pizza.price }}</p>
        <p class="w3-margin-top w3-margin-bottom description">
          {{ pizza.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import store from "@/store";

export default {
  name: "ProductList",
  store,
  props: {
    pizzas: {
      type: Array,
    },
  },
  computed: {
    ...mapGetters(["quantityInCartGetter"]),
  },
};
</script>

<style lang="scss">
@import "ProductList";
</style>
