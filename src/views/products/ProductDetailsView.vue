<template>
  <div>
    <h1>Product Details</h1>
    <hr />
    <div v-if="error">
      <b-alert show variant="danger"
        >No se ha podido mostrar este producto</b-alert
      >
    </div>
    <div v-else>
        <p><strong>Nombre:</strong> {{product.name}}</p>
        <p><strong>Valor:</strong> {{product.value}}</p>
        <p><strong>Ganancia:</strong> {{product.gain}}</p>
        <p><strong>Marca:</strong> {{product.brand.name}}</p>
        <p><strong>Categoría:</strong> {{product.category.name}}</p>
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