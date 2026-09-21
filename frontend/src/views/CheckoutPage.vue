<template>
  <div>
    <SubBanner prop-title="Checkout"/>
    <Checkout/>
  </div>
</template>

<script>
import Checkout from "@/components/Checkout/Checkout";
import SubBanner from "@/components/SubBanner/SubBanner";

export default {
  name: "CheckoutPage.vue",
  components: { SubBanner, Checkout },
};
</script>

<style scoped></style>
