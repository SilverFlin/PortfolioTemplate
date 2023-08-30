<template>
    <nav class="fixed z-10 w-full top-3 bg-inherit">

        <Icon @click="returnPage" width="2rem" icon="line-md:arrow-left"
            class="absolute rounded-full cursor-pointer dark:text-secondary-100 dark:hover:text-secondary-200 hover:text-secondary-200 top-15 left-10" />


        <ul class="justify-around hidden lg:flex px-80">
            <li v-for="route in routes" :key="route.name" class="">
                <router-link :to="{ name: route.name }"
                    class="font-bold uppercase dark:text-secondary-100 dark:hover:text-primary-200 text-secondary-900 hover:text-primary-400"
                    active-class="text-primary-500">
                    {{ route.name }}
                </router-link>
            </li>
        </ul>

        <button @click="navMenuStore.toggle" class="absolute lg:hidden right-10 text-secondary-800 dark:text-secondary-100">
            <Icon width="32" height="32" icon="ci:hamburger-lg" />
        </button>

        <Icon @click="toggleDarkMode" width="2rem" icon="line-md:light-dark"
            class="absolute rounded-full cursor-pointer lg:block text-secondary-800 -top-0 dark:text-secondary-100 dark:hover:text-secondary-200 hover:text-secondary-300 right-20" />


        <transition name="dropdown">
            <ul class="absolute w-full mt-10 bg-secondary-100 dark:bg-secondary-800 dark:text-secondary-200 lg:hidden text-secondary-500"
                v-if="navMenuStore.isOpen">
                <li v-for="route in routes" :key="route.name" class="px-4">
                    <router-link @click="closeDropDown" :to="{ name: route.name }"
                        class="block w-full h-full px-4 py-2 font-bold uppercase " active-class="text-primary-600">
                        {{ route.name }}
                    </router-link>
                    <template v-if="routes.indexOf(route) !== routes.length - 1">
                        <hr class="text-secondary-500">
                    </template>
                </li>
            </ul>
        </transition>

    </nav>
</template>

<script setup lang="ts">
import router from "@/router";
import { Icon } from "@iconify/vue";
import { returnPage } from "@/router";
import { useNavMenu } from '@/stores/navMenu'
import { useSelectedThemeStore } from "@/stores/selectedTheme";

const navMenuStore = useNavMenu()
const selectedThemeStore = useSelectedThemeStore()

const toggleDarkMode = () => {
    selectedThemeStore.toggleDarkMode()
}

function closeDropDown() {
    navMenuStore.close()
}

const navBarRoutes = ['home', 'about me', 'projects', 'articles']

const routes = router.getRoutes().filter((route) => navBarRoutes.includes(route.name?.toString() ?? ''));
</script>

<style>
.dropdown-enter-from {
    opacity: 0;
    transform: translateY(-30px);
}

.dropdown-enter-active,
.dropdown-leave-active {
    transition: all 0.3s ease;
}

.dropdown-enter,
.dropdown-leave-to {
    opacity: 0;
    transform: translateY(-30px);
}
</style>