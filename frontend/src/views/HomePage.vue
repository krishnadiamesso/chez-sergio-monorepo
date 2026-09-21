<template>
  <div class="home">
    <Banner/>
    <AboutUs/>
    <BestSellers/>
    <Catering/>
  </div>
</template>

<script>
// @ is an alias to /src
import AboutUs from "@/components/AboutUs/AboutUs";
import Banner from "@/components/Banner/Banner";
import Catering from "@/components/Catering/Catering";
import BestSellers from "@/components/BestSellers/BestSellers";

export default {
  name: "HomePage",
  components: {
    BestSellers,
    Catering,
    Banner,
    AboutUs,
  },
};
</script>
