import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    isDark: true  // Set dark mode as default
  }),
  actions: {
    initTheme() {
      document.documentElement.classList.add('dark')
    }
  }
})