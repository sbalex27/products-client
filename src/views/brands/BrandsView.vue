<template>
  <div>
    <h1>Brands</h1>
    <div v-if="error">
      <b-alert show variant="danger">No se han podido cargar las marcas</b-alert>
    </div>
    <div v-else>
      <b-table :items="brands" :fields="fields"></b-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: ["name", "description"],
      brands: null,
      error: null,
    };
  },
  mounted() {
    fetch("https://localhost:7020/Api/Brands")
      .then((response) => response.json())
      .then((body) => (this.brands = body))
      .catch((error) => (this.error = error));
  },
};
</script>

<style>
</style>