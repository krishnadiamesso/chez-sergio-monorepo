<template>
  <div id="app">
    <NavBar/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";

export default {
  components: { Footer, NavBar },
  name: "App",
};
</script>

<style lang="scss">
html,
body {
  font-family: "Avenir Next", serif !important;
}

.color-accent {
  background-color: rgba(246, 186, 127, 0.94);
}

.link {
  color: white;
  text-decoration: none;
}

.link:hover {
  color: #ff9300;
}

.theme-color {
  color: #ff9300;
}

.theme-color-background {
  color: #ff9300;
}

.badge-add {
  background-color: #3a2c2c;
  padding: 0.25em 0.45em !important;
  font-size: 0.75em;
  font-weight: 600 !important;
  line-height: 1;
  color: #ff9800 !important;
}

.menu-back-color {
  background-color: #1a1a1a;
  color: white;
}
</style>
