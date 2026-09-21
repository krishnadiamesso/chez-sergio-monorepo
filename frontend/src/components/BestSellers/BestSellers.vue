<template>
  <div class="BestSellers">
    <div id="about" class="w3-container menu-back-color" style="padding: 128px 16px">
      <h2 class="w3-center">Our Best Sellers</h2>
      <p class="w3-center w3-large">Your Favorite Pizza awaits you</p>
      <div v-if="bestSellers">
        <ProductList :pizzas="bestSellers"/>
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
import router from "@/router";
import store from "@/store";
import ProductList from "@/components/ProductList/ProductList";

export default {
  name: "BestSellers",
  components: { ProductList },
  router,
  store,
  // created() {
  //   this.$store.dispatch("bestSellerAction");
  // },
  computed: {
    bestSellers() {
      return this.$store.getters.bestSellerGetter;
    },
  },
};
</script>

<style lang="scss">
@import "BestSellers";
</style>
