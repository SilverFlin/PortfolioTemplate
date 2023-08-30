<template>
    <Icon class="p-0 m-0" icon="el:quote-right" :width="props.width" :height="props.height" />
</template>
<script setup lang="ts">
import { Icon } from "@iconify/vue";

const props = defineProps({
    width: {
        type: Number,
        required: false,
        default: 50
    },
    height: {
        type: Number,
        required: false,
        default: 50
    }
})
</script>