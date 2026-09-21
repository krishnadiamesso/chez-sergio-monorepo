<template>
  <div class="Menu">
    <div class="w3-container menu-back-color" style="padding: 75px 16px">
      <!-- Nav tabs -->
      <div v-if="filteredProducts">
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <span class="category-pill" @click="filterCategory('All')">All Items</span>
          </li>
          <li class="nav-item">
            <span class="category-pill" @click="filterCategory('Vegetarian')">Vegetarian</span>
          </li>
          <li class="nav-item">
            <span class="category-pill" @click="filterCategory('Meat')">Meat Extravaganza</span>
          </li>
          <li class="nav-item">
            <span class="category-pill" @click="filterCategory('Seafood')">Seafood</span>
          </li>
          <li class="nav-item">
            <span class="category-pill" @click="filterCategory('Spicy')">Spicy</span>
          </li>
        </ul>
        <ProductList :pizzas="filteredProducts"/>
      </div>
      <div v-else>
        <div class="d-flex justify-content-center">
          <div class="spinner-border" role="status" style="width: 5rem; height: 5rem"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductList from "@/components/ProductList/ProductList";
import store from "@/store";

export default {
  name: "Menu",
  components: { ProductList },
  store,
  computed: {
    filteredProducts() {
      return this.$store.getters.filteredProductsGetter;
    },
  },
  methods: {
    filterCategory(category) {
      this.$store.dispatch("filterCategoryAction", category);
    },
  },
};
</script>

<style lang="scss">
@import "Menu";
</style>
