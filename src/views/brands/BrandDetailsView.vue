<template>
  <div>
    <h1>Brands Details</h1>
    <hr />

    <div v-if="error">
      <b-alert show variant="danger">No se ha podido obtener la marca</b-alert>
    </div>
    <div v-else>
      <div><strong>Name: </strong>{{ brand.name }}</div>
      <div><strong>Description: </strong>{{ brand.description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      error: null,
      brand: null,
    };
  },
  mounted() {
    fetch(`https://localhost:7020/Api/Brands/${this.id}`)
      .then((response) => response.json())
      .then((body) => (this.brand = body))
      .catch((error) => (this.error = error));
  },
};
</script>

<style>
</style>