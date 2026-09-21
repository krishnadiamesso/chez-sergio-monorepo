<template>
  <div class="Cart">
    <div v-if="products" class="container">
      <div class="wrapper wrapper-content animated fadeInRight">
        <div class="row">
          <div v-if="cartLength === 0" class="col-md-9 mb-3">
            <h5>Your cart is currently empty.</h5>
          </div>
          <div class="col-md-9">
            <div class="ibox">
              <div class="ibox-title">
                <span class="pull-right"
                >(<strong>{{ cartLength }}</strong
                >) items</span
                >
                <h5>Items in your cart</h5>
              </div>
              <div v-if="cartItems">
                <div v-for="(cartItem, index) in cartItems" :key="index" class="ibox-content">
                  <div v-if="products[cartItem.pizza_id]">
                    <div>
                      <div>
                        <div class="row">
                          <div class="col-md-5 col-lg-3 col-xl-3">
                            <img
                              :alt="products[cartItem.pizza_id].name"
                              :src="products[cartItem.pizza_id].image"
                              class="img-fluid mb-2"
                            />
                          </div>
                          <div class="col-md-7 col-lg-9 col-xl-9">
                            <div>
                              <div class="d-flex justify-content-between">
                                <div>
                                  <h3>
                                    <router-link
                                      :to="{ name: 'ProductDetail', params: { id: products[cartItem.pizza_id].id } }"
                                      class="product-link"
                                    >
                                      {{ products[cartItem.pizza_id].name }}
                                    </router-link>
                                  </h3>
                                  <p class="small">
                                    {{ products[cartItem.pizza_id].description }}
                                  </p>
                                  <p class="mb-3 text-muted text-uppercase small">
                                    Unit Price: ${{ products[cartItem.pizza_id].price }}
                                  </p>
                                </div>
                                <div>
                                  <div class="def-number-input number-input safari_only mb-0 w-100">
                                    <select
                                      :value="cartItem.quantity"
                                      class="form-select me-3"
                                      @input="updateQuantity(cartItem, $event.target.value)"
                                    >
                                      <option selected value="1">1</option>
                                      <option value="2">2</option>
                                      <option value="3">3</option>
                                      <option value="4">4</option>
                                      <option value="5">5</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div class="d-flex justify-content-between align-items-center">
                                <div class="m-t-sm col-sm-1">
                                  <a class="btn btn-outline-danger removeItem" @click="removeItem(cartItem)"
                                  ><i class="fa fa-trash"></i
                                  ></a>
                                </div>
                                <h4 class="mb-0">
                                  <span
                                  ><strong>${{ cartItem.quantity * products[cartItem.pizza_id].price }}</strong></span
                                  >
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div v-else>
                    <div class="d-flex justify-content-center w3-margin-top w3-margin-bottom">
                      <div class="spinner-border" role="status" style="width: 5rem; height: 5rem"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-else>
                <div class="d-flex justify-content-center w3-margin-top w3-margin-bottom">
                  <div class="spinner-border" role="status" style="width: 5rem; height: 5rem"></div>
                </div>
              </div>
              <div class="ibox-content">
                <router-link :to="{ name: 'Menu' }">
                  <button class="btn btn-white pull-left d-none d-sm-block">
                    <i class="fa fa-arrow-left"></i> Continue shopping
                  </button>
                </router-link>
                <router-link :to="{ name: 'CheckoutPage' }">
                  <button v-if="cartLength !== 0" class="btn btn-primary pull-right">
                    <i class="fa fa fa-shopping-cart"></i> Checkout
                  </button>
                </router-link>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="ibox">
              <div class="ibox-title">
                <h5>Cart Summary</h5>
              </div>
              <div class="ibox-content">
                <span> Total </span>
                <h2 class="font-bold">${{ totalBalance }}</h2>
                <hr/>
                <div v-if="cartLength !== 0" class="m-t-sm">
                  <div class="btn-group">
                    <router-link :to="{ name: 'CheckoutPage' }" class="btn btn-primary btn-sm"
                    ><i class="fa fa-shopping-cart"></i> Checkout
                    </router-link>
                  </div>
                </div>
              </div>
            </div>

            <div class="ibox">
              <div class="ibox-title">
                <h5>Support</h5>
              </div>
              <div class="ibox-content text-center">
                <h5><i class="fa fa-phone"></i> +1.409.553.2323</h5>
                <span class="small"> Please contact us for any questions you may have.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status" style="width: 5rem; height: 5rem"></div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import { mapState } from "vuex";
import store from "@/store";

export default {
  name: "Cart",
  router: router,
  store,
  computed: {
    cartLength() {
      return this.$store.getters.cartLengthGetter;
    },
    totalBalance() {
      return this.$store.getters.totalBalanceGetter;
    },
    ...mapState({
      products: "products",
      cartItems: "cartItems",
    }),
  },
  methods: {
    removeItem(item) {
      this.$store.dispatch("removeItemAction", item);
    },
    updateQuantity(item, newQuantity) {
      this.$store.dispatch("updateQuantityAction", { item, newQuantity });
    },
  },
};
</script>

<style lang="scss">
@import "Cart";
</style>
