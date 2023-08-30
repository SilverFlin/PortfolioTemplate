import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useNavMenu = defineStore('navMenu', () => {
    const isOpen = ref(false)
    function close() {
        isOpen.value = false
    }
    function toggle() {
        isOpen.value = !isOpen.value
    }

    return { isOpen, close, toggle }
})
