import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('../views/Layout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/frontend/Home.vue')
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/frontend/About.vue')
      },
      {
        path: '/product/:id',
        name: 'Product',
        component: () => import('../views/frontend/Product.vue')
      },
      {
        path: '/products',
        name: 'Products',
        component: () => import('../views/frontend/Products.vue')
      },
      {
        path: '/login',
        name: 'Login',
        component: () => import('../views/frontend/Login.vue')
      },
      {
        path: '/cart',
        name: 'Cart',
        component: () => import('../views/frontend/Cart.vue')
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: 'products',
        name: 'Products',
        component: () => import('../views/backend/Products.vue')
      },
      {
        path: 'order',
        name: 'Order',
        component: () => import('../views/backend/Order.vue')
      },
      {
        path: 'coupons',
        name: 'Coupons',
        component: () => import('../views/backend/Coupons.vue')
      },
      {
        path: 'storages',
        name: 'Storages',
        component: () => import('../views/backend/Storages.vue')
      }
    ]
  }

]

const router = new VueRouter({
  routes
})

export default router
