<template>
  <div class="SubBanner">
    <div class="bg-dark text-secondary px-4 py-5 text-center">
      <div class="py-5">
        <h1 class="display-5 fw-bold text-white">{{ propTitle }}</h1>
        <div class="col-lg-6 mx-auto">
          <p class="fs-5 mb-4">{{ propDescription }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubBanner",
  props: {
    propTitle: {
      type: String,
    },
    propDescription: {
      type: String,
    },
  },
};
</script>

<style lang="scss">
@import "SubBanner";
</style>
