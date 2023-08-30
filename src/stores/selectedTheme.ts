import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSelectedThemeStore = defineStore('selectedTheme', () => {
    const isDarkMode = ref(false)
    function toggleDarkMode() {

        // This uses the approach recommended here: https://tailwindcss.com/docs/dark-mode#supporting-system-preference-and-manual-selection
        isDarkMode.value = !isDarkMode.value

        if (isDarkMode.value) {
            localStorage.theme = 'dark'
            document.documentElement.classList.add('dark')
        } else {
            localStorage.theme = 'light'
            document.documentElement.classList.remove('dark')
        }
    }

    return { isDarkMode, toggleDarkMode }
})
