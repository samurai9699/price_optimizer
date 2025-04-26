<template>
  <div :class="{ 'dark': isDark }">
    <nav v-if="session" class="bg-white dark:bg-gray-800 shadow">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <div class="flex-shrink-0 flex items-center">
              <router-link to="/" class="text-xl font-bold text-blue-600 dark:text-blue-400">
                PriceOptimizer
              </router-link>
            </div>
            <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
              <router-link
                v-for="item in navigation"
                :key="item.name"
                :to="item.href"
                :class="[
                  $route.path === item.href
                    ? 'border-blue-500 text-gray-900 dark:text-white'
                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-300',
                  'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                ]"
              >
                {{ item.name }}
              </router-link>
            </div>
          </div>
          <div class="flex items-center">
            <button
              @click="logout"
              class="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </nav>

    <router-view></router-view>
    <ThemeToggle />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from './supabase'
import { useThemeStore } from './stores/theme'
import { storeToRefs } from 'pinia'
import ThemeToggle from './components/ThemeToggle.vue'

const router = useRouter()
const themeStore = useThemeStore()
const { isDark } = storeToRefs(themeStore)
const session = ref(null)

const navigation = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Products', href: '/products' },
  { name: 'Analytics', href: '/analytics' }
]

const logout = async () => {
  await supabase.auth.signOut()
  router.push('/login')
}

onMounted(async () => {
  const { data: { session: currentSession } } = await supabase.auth.getSession()
  session.value = currentSession
  
  supabase.auth.onAuthStateChange((_event, newSession) => {
    session.value = newSession
  })
})
</script>