<template>
  <div>
    <h1>Product Details</h1>
    <hr />
    <div v-if="error">
      <b-alert show variant="danger">
        No se ha podido mostrar este producto
      </b-alert>
    </div>
    <div v-else>
      <div><strong>Nombre:</strong> {{ product.name }}</div>
      <div><strong>Valor:</strong> {{ product.value }}</div>
      <div><strong>Ganancia:</strong> {{ product.gain }}</div>
      <div>
        <strong>Marca: </strong>
        <router-link
          :to="{ name: 'brand-details', params: { id: product.brand.id } }"
        >
          {{ product.brand.name }}</router-link
        >
      </div>
      <div>
        <strong>Categoría: </strong>
        <router-link
          :to="{
            name: 'category-details',
            params: { id: product.category.id },
          }"
        >
          {{ product.category.name }}</router-link
        >
      </div>
    </div>
    <p></p>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      product: null,
      error: null,
    };
  },
  mounted() {
    fetch(`https://localhost:7020/Api/Products/${this.id}`)
      .then((response) => response.json())
      .then((body) => (this.product = body))
      .catch((error) => (this.error = error));
  },
};
</script>

<style>
</style>