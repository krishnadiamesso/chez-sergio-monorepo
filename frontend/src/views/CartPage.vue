<template>
  <div>
    <SubBanner prop-title="Shopping Cart"/>
    <Cart/>
  </div>
</template>

<script>
import Cart from "@/components/Cart/Cart";
import SubBanner from "@/components/SubBanner/SubBanner";

export default {
  name: "CartPage",
  components: { SubBanner, Cart },
};
</script>

<style scoped></style>
