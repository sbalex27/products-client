<template>
  <div>
    <h1>Products</h1>
    <div v-if="error">
      <b-alert show variant="danger">Ha ocurrido un error</b-alert>
    </div>
    <div v-else>
      <b-table :items="products" :fields="fields"></b-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: ["name", "value", "gain"],
      products: [],
      error: null,
    };
  },
  mounted() {
    fetch("https://localhost:7020/Api/Products")
      .then((response) => response.json())
      .then((body) => (this.products = body))
      .catch((error) => (this.error = error));
  },
};
</script>

<style>
</style>