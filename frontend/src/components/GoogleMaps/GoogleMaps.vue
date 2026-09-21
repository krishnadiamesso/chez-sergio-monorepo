<template>
  <div class="GoogleMaps">
    <div id="map-container-google-1" class="z-depth-1-half map-container" style="height: 250px">
      <iframe
        allowfullscreen
        loading="lazy"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.665731662345!2d-79.38874088266552!3d43.65512249869508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34c95b3cdfdf%3A0xe939011562414cfe!2s195-165%20Dundas%20St%20W%2C%20Toronto%2C%20ON%20M5G%201C7%2C%20Canada!5e0!3m2!1sen!2smx!4v1631400499004!5m2!1sen!2smx"
        style="border: 0"
      >
      </iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoogleMaps",
};
</script>

<style lang="scss">
@import "GoogleMaps";
</style>
