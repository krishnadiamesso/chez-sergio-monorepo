<template>
  <div>
    <SubBanner prop-description="The Best of Toronto" prop-title="Our Menu"/>
    <Menu/>
  </div>
</template>

<script>
import Menu from "@/components/Menu/Menu";
import SubBanner from "@/components/SubBanner/SubBanner";

export default {
  name: "MenuPage",
  components: { SubBanner, Menu },
};
</script>

<style scoped></style>
