<template>
    <div>
        <div class="flex flex-col items-center justify-center">
            <h1 class="text-3xl font-bold text-center uppercase">Skills</h1>
            <div class="flex flex-row flex-wrap items-center justify-between mt-6">
                <div v-for="(logo, idx) in logos" :key="idx" class="w-20 h-20 shrink-0">
                    <Icon class="w-full h-full" :icon="logo" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';

const logos = [
    'logos:javascript',
    'logos:typescript-icon',
    'logos:nodejs-icon',
    'logos:vue',
    'logos:java',
    'logos:linux-tux',
    'logos:git-icon',
    'logos:docker-icon',
    'logos:express',
    'logos:html-5',
    'logos:css-3',
    'logos:tailwindcss-icon',
]
</script>