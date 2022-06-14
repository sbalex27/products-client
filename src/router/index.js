import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/products/ProductsView.vue')
  },
  {
    path: '/products/:id',
    name: 'product-details',
    component: () => import('../views/products/ProductDetailsView.vue'),
    props: true
  },
  {
    path: '/brands',
    name: 'brands',
    component: () => import('../views/brands/BrandsView.vue'),
  },
  {
    path: '/categories',
    name: 'categories',
    component: () => import('../views/categories/CategoriesView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
