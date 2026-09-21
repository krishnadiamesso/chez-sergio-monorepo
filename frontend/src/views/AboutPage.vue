<template>
  <div class="about">
    <SubBanner prop-title="About Us"/>
    <AboutUs/>
    <ContactDetailInfo/>
    <GoogleMaps/>
  </div>
</template>

<script>
import AboutUs from "@/components/AboutUs/AboutUs";
import SubBanner from "@/components/SubBanner/SubBanner";
import GoogleMaps from "@/components/GoogleMaps/GoogleMaps";
import ContactDetailInfo from "@/components/ContactDetailInfo/ContactDetailInfo";

export default {
  name: "AboutPage",
  components: { ContactDetailInfo, GoogleMaps, SubBanner, AboutUs },
};
</script>
