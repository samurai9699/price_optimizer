import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import Products from './views/Products.vue'
import Analytics from './views/Analytics.vue'
import Login from './views/Login.vue'
import Signup from './views/Signup.vue'
import Home from './views/Home.vue'
import { supabase } from './supabase'

const routes = [
  { 
    path: '/',
    component: Home,
    meta: { requiresAuth: false }
  },
  { 
    path: '/dashboard',
    component: Dashboard,
    meta: { requiresAuth: true }
  },
  { 
    path: '/products',
    component: Products,
    meta: { requiresAuth: true }
  },
  { 
    path: '/analytics',
    component: Analytics,
    meta: { requiresAuth: true }
  },
  { 
    path: '/login',
    component: Login,
    meta: { requiresAuth: false }
  },
  { 
    path: '/signup',
    component: Signup,
    meta: { requiresAuth: false }
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  const { data: { session } } = await supabase.auth.getSession()
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !session) {
    next('/login')
  } else if (to.path === '/' && session) {
    next('/dashboard')
  } else {
    next()
  }
})