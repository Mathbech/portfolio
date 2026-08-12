import { ref } from 'vue'

const STORAGE_KEY = 'theme-preference'

function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function getStoredTheme() {
  return localStorage.getItem(STORAGE_KEY)
}

const isDark = ref(false)

function applyTheme(theme) {
  isDark.value = theme === 'dark'
  document.documentElement.setAttribute('data-theme', theme)
}

function toggleTheme() {
  const next = isDark.value ? 'light' : 'dark'
  localStorage.setItem(STORAGE_KEY, next)
  applyTheme(next)
}

function initTheme() {
  const stored = getStoredTheme()
  applyTheme(stored || getSystemTheme())

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!getStoredTheme()) {
      applyTheme(e.matches ? 'dark' : 'light')
    }
  })
}

export function useTheme() {
  return { isDark, toggleTheme, initTheme }
}
