import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // name: 'Layout',
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
        path: '/reservation',
        name: 'Reservation',
        component: () => import('../views/frontend/Reservation.vue')
      },
      {
        path: '/order',
        name: 'Order',
        component: () => import('../views/frontend/Order.vue')
      },
      {
        path: '/cartcheck/:orderId',
        name: 'Cartcheck',
        component: () => import('../views/frontend/Cartcheck.vue')
      },
      {
        path: '/success',
        name: 'Success',
        component: () => import('../views/frontend/Success.vue')
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: 'products',
        name: 'ProductBackend',
        component: () => import('../views/backend/Products.vue')
      },
      {
        path: 'order',
        name: 'OrderBackend',
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
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  routes,
  linkExactActiveClass: 'active'
})

export default router
