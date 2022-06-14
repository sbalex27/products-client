<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand to="home">Products Client</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :to="{ name: 'products' }">Products</b-nav-item>
          <b-nav-item :to="{ name: 'categories' }">Categories</b-nav-item>
          <b-nav-item :to="{ name: 'brands' }">Brands</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-container>
      <router-view />
    </b-container>
  </div>
</template>
