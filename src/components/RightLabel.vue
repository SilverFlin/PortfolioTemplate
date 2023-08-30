<template>
    <div @click="clickLabel" :class="{ 'w-5/6': isRendered, 'w-3/6': !isRendered, 'hover:w-4/6': !isRendered }"
        class="h-12 py-3 pl-3 font-bold rounded-l-lg cursor-pointer bg-primary-200 dark:bg-primary-800 text-secondary-800 dark:text-secondary-100">
        <div class="hidden lg:block">
            <slot name="text"></slot>
        </div>
        <div class="block lg:hidden">
            <slot name="icon" class="w-full"></slot>

        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
    setCurrentViewIndex: Function,
    indexComponent: Number,
    currentViewIndex: Number
})

const isRendered = computed(() => props.indexComponent === props.currentViewIndex)

function clickLabel() {
    if (!props.setCurrentViewIndex) {
        return;
    }
    props.setCurrentViewIndex(props.indexComponent);
}


</script>