<template>
  <div class="Footer">
    <div class="container">
      <footer class="py-3 my-4">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
          <li class="nav-item">
            <router-link :to="{ name: 'Home' }" class="nav-link px-2 text-muted">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'About' }" class="nav-link px-2 text-muted">About</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Menu' }" class="nav-link px-2 text-muted">Menu</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'CartPage' }" class="nav-link px-2 text-muted">Cart</router-link>
          </li>
        </ul>
        <p class="text-center text-muted">© 2021 Chez Sergio</p>
      </footer>
    </div>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "Footer",
  router,
};
</script>
