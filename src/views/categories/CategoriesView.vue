<template>
  <div>
    <h1>Categories</h1>
    <div v-if="error">
      <b-alert show variant="danger"
        >No se han podido cargar las categorías</b-alert
      >
    </div>
    <div v-else>
      <b-table :fields="fields" :items="categories"></b-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: ["name", "description"],
      categories: null,
      error: null,
    };
  },
  mounted() {
    fetch("https://localhost:7020/Api/Categories")
      .then((response) => response.json())
      .then((body) => (this.categories = body))
      .catch((error) => (this.error = error));
  },
};
</script>

<style>
</style>