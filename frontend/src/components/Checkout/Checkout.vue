<template>
  <div class="Checkout">
    <div class="container">
      <main>
        <div class="row g-5">
          <div class="col-md-5 col-lg-4 order-md-last">
            <h4 class="d-flex justify-content-between align-items-center mb-3">
              <span class="text-primary">Your cart</span>
              <!--              <span class="badge bg-primary rounded-pill">{{ cartLength }}</span>-->
            </h4>
            <ul class="list-group mb-3">
              <li
                v-for="(item, index) in cartItems"
                :key="index"
                class="list-group-item d-flex justify-content-between lh-sm"
              >
                <div>
                  <h6 class="my-0">
                    {{ products[item.pizza_id].name }} (${{ products[item.pizza_id].price }} x {{ item.quantity }})
                  </h6>
                </div>
                <span class="text-muted">${{ products[item.pizza_id].price * item.quantity }}</span>
              </li>
              <li class="list-group-item d-flex justify-content-between">
                <span>Total (CAD)</span>
                <strong>${{ totalBalance }}</strong>
              </li>
            </ul>
          </div>
          <div class="col-md-7 col-lg-8">
            <h4 class="mb-3">Billing address</h4>
            <form class="needs-validation" novalidate="">
              <div class="row g-3">
                <div class="col-sm-6">
                  <label class="form-label" for="firstName">First name</label>
                  <input id="firstName" class="form-control" placeholder="" required="" type="text" value=""/>
                  <div class="invalid-feedback">Valid first name is required.</div>
                </div>

                <div class="col-sm-6">
                  <label class="form-label" for="lastName">Last name</label>
                  <input id="lastName" class="form-control" placeholder="" required="" type="text" value=""/>
                  <div class="invalid-feedback">Valid last name is required.</div>
                </div>

                <div class="col-12">
                  <label class="form-label" for="email">Email <span class="text-muted">(Optional)</span></label>
                  <input id="email" class="form-control" placeholder="you@example.com" type="email"/>
                  <div class="invalid-feedback">Please enter a valid email address for shipping updates.</div>
                </div>

                <div class="col-12">
                  <label class="form-label" for="address">Address</label>
                  <input id="address" class="form-control" placeholder="1234 Main St" required="" type="text"/>
                  <div class="invalid-feedback">Please enter your shipping address.</div>
                </div>

                <div class="col-12">
                  <label class="form-label" for="address2">Address 2 <span class="text-muted">(Optional)</span></label>
                  <input id="address2" class="form-control" placeholder="Apartment or suite" type="text"/>
                </div>

                <div class="col-md-5">
                  <label class="form-label" for="country">Country</label>
                  <select id="country" class="form-select" required="">
                    <option value="">Choose...</option>
                    <option>United States</option>
                  </select>
                  <div class="invalid-feedback">Please select a valid country.</div>
                </div>

                <div class="col-md-4">
                  <label class="form-label" for="state">State</label>
                  <select id="state" class="form-select" required="">
                    <option value="">Choose...</option>
                    <option>California</option>
                  </select>
                  <div class="invalid-feedback">Please provide a valid state.</div>
                </div>

                <div class="col-md-3">
                  <label class="form-label" for="zip">Zip</label>
                  <input id="zip" class="form-control" placeholder="" required="" type="text"/>
                  <div class="invalid-feedback">Zip code required.</div>
                </div>
              </div>
              <hr class="my-4"/>

              <h4 class="mb-3">Payment</h4>

              <div class="my-3">
                <div class="form-check">
                  <input
                    id="credit"
                    checked=""
                    class="form-check-input"
                    name="paymentMethod"
                    required=""
                    type="radio"
                  />
                  <label class="form-check-label" for="credit">Credit card</label>
                </div>
              </div>

              <div class="row gy-3">
                <div class="col-md-6">
                  <label class="form-label" for="cc-name">Name on card</label>
                  <input id="cc-name" class="form-control" placeholder="" required="" type="text"/>
                  <small class="text-muted">Full name as displayed on card</small>
                  <div class="invalid-feedback">Name on card is required</div>
                </div>

                <div class="col-md-6">
                  <label class="form-label" for="cc-number">Credit card number</label>
                  <input id="cc-number" class="form-control" placeholder="" required="" type="text"/>
                  <div class="invalid-feedback">Credit card number is required</div>
                </div>

                <div class="col-md-3">
                  <label class="form-label" for="cc-expiration">Expiration</label>
                  <input id="cc-expiration" class="form-control" placeholder="" required="" type="text"/>
                  <div class="invalid-feedback">Expiration date required</div>
                </div>

                <div class="col-md-3">
                  <label class="form-label" for="cc-cvv">CVV</label>
                  <input id="cc-cvv" class="form-control" placeholder="" required="" type="text"/>
                  <div class="invalid-feedback">Security code required</div>
                </div>
              </div>

              <hr class="my-4"/>

              <button class="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
            </form>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Checkout",
  computed: {
    ...mapState({
      products: "products",
      cartItems: "cartItems",
    }),
    cartLength() {
      return this.$store.getters.cartLengthGetter;
    },
    totalBalance() {
      return this.$store.getters.totalBalanceGetter;
    },
  },
};
</script>

<style lang="scss">
@import "Checkout";
</style>
