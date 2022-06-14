<template>
  <div>
    <h1>Category Details</h1>
    <hr />

    <div v-if="error">
      <b-alert show variant="danger">
        No se ha podido mostrar la categoría
      </b-alert>
    </div>
    <div v-else>
      <div><strong>Name: </strong>{{ category.name }}</div>
      <div><strong>Description: </strong>{{ category.description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      error: null,
      category: null,
    };
  },
  mounted() {
    fetch(`https://localhost:7020/Api/Categories/${this.id}`)
      .then((response) => response.json())
      .then((body) => (this.category = body))
      .catch((error) => (this.error = error));
  },
};
</script>

<style>
</style>