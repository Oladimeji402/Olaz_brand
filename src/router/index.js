import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import CartPage from '@/views/CartPage.vue'
import ProductView from '../views/ProductVeiw.vue'
import TermsAndConditions from '../views/TermsView.vue'
import AdminView from '../views/AdminView.vue'
import ContactView from '../views/ContactView.vue'
import CartPage from '../views/CartPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    // {
    //   path: "/cart",
    //   name: "CartPage",
    //   component: CartPage,
    // },
    {
      path: "/product",
      name: "ProductView",
      component: ProductView,
    },
    {
      path: '/cart',
      name: "CartPage",
      component: CartPage,
    },
    {
      path: "/terms",
      name: "TermsAndConditions",
      component: TermsAndConditions,
    },
    {
      path: "/admin",
      name: "AdminView",
      component: AdminView,
    },
    {
      path: "/contact",
      name: "ContactView",
      component: ContactView,
    },
  ],
})

export default router
