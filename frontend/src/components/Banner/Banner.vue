<template>
  <div class="Banner">
    <div class="container my-5">
      <div class="row pb-0 pe-lg-0 align-items-center rounded-3 border shadow-lg">
        <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
          <h1 class="display-4 fw-bold lh-1">{{ restaurantTitle }}</h1>
          <p class="lead w3-margin-top">
            {{ leadDescription }}
          </p>
        </div>
        <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img :alt="altTextMainImage" :src="imgURL" class="rounded-lg-3" width="720"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  data() {
    return {
      restaurantTitle: "Chez Sergio",
      imgURL: "chezSergioBanner.jpg",
      altTextMainImage: "Pizza Image of Chez Sergio",
      leadDescription: `Authentic Italian Pizza in a warm, friendly atmosphere to share a meal with family and friends at any time of the day or evening.`,
    };
  },
};
</script>

<style lang="scss">
@import "Banner";
</style>
