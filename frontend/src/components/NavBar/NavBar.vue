<template>
  <div class="NavBar">
    <nav class="p-3 bg-dark text-white">
      <div class="container-fluid">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <router-link
            :to="{ name: 'Home' }"
            class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <img alt="Chez Sergio Logo" height="32" src="../../assets/chez-sergio-logo-3.png" width="40"/>
          </router-link>
          <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li class="nav-link px-2 text-secondary">
              <router-link :to="{ name: 'Home' }" class="link" exact-active-class="active-route">Home</router-link>
            </li>

            <li class="nav-link px-2 text-white">
              <router-link :to="{ name: 'About' }" class="link" exact-active-class="active-route">About</router-link>
            </li>

            <li class="nav-link px-2 text-white">
              <router-link :to="{ name: 'Menu' }" class="link" exact-active-class="active-route">Menu</router-link>
            </li>
          </ul>

          <div class="text-end">
            <router-link :to="{ name: 'CartPage' }">
              <button class="btn btn-warning" type="button">
                Cart
                <span v-if="cartLength > 0" class="badge rounded-pill badge-add badge-add-nav-bar">{{
                    cartLength
                  }}</span>
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import router from "@/router";
import { mapGetters } from "vuex";

export default {
  name: "NavBar",
  router,
  computed: {
    ...mapGetters({
      cartLength: "cartLengthGetter",
    }),
  },
  async created() {
    await this.$store.dispatch("getCartItemsAction");
    await this.$store.dispatch("getPizzasAction");
    await this.$store.dispatch("bestSellerAction");
  },
};
</script>

<style lang="scss">
@import "NavBar";
</style>
