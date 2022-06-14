<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Products Client</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Products</b-nav-item>
          <b-nav-item href="#">Categories</b-nav-item>
          <b-nav-item href="#">Brands</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-container>
      <!-- Body -->
      <products-screen></products-screen>
      <b-button variant="primary">Hello World</b-button>
    </b-container>
  </div>
</template>

<script>
import ProductsScreen from "./components/ProductsScreen.vue";
export default {
  name: "App",
  components: { ProductsScreen },
};
</script>

<style>
</style>