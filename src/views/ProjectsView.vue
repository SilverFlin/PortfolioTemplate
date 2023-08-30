<template>
    <div
        class="flex flex-wrap justify-around max-w-screen-lg p-5 mx-auto mt-12 mb-12 min-w-min bg-inherit min-h-min max-h-max">
        <transition-group name="card">
            <div v-for="(card, idx) in cards" :key="idx">
                <project-card :card="card"></project-card>
            </div>
        </transition-group>
    </div>
</template>

<script setup lang="ts">
import type { Ref } from "vue"

import { ref } from 'vue';
import ProjectCard from '@/components/ProjectCard.vue';
import type { Project } from "@/types";
import { getAllProjects } from "@/content";

const cards: Ref<Project[]> = ref([])

getAllProjects()
    .then((res) => {
        res.forEach((card, idx) => {
            setTimeout(() => {
                cards.value.push(card)
            }, idx * 800)
        })
    })

</script>

<style>
.card-move,
.card-enter-active,
.card-leave-active {
    transition: opacity 0.8s ease;
}

.card-enter-from,
.card-leave-to {
    opacity: 0;
}

.card-leave-active {
    position: absolute;
}
</style>