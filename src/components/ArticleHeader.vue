<template>
    <div class="flex w-screen bg-fixed bg-center bg-cover h-2/3"
        :style="getBackgroundImage(`${imagesDirPath}/${article?.imageName}`)">
        <div class="w-3/4 px-8 py-6 m-auto overflow-hidden bg-[white] ">
            <h1 class="text-3xl font-bold uppercase ">
                {{ article?.title }}
            </h1>
            <span class="font-mono right-0 mt-2 inline-block text-base text-[#504A40] lowercase">
                {{ article?.date.toLocaleString('default', { day: '2-digit', month: 'short', year: "numeric" }) }}
            </span>
            <p class="mt-4">
                {{ article?.description }}
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { articlesImagesDirPath, projectsImagesDirPath } from '@/constants/paths';
import { getBackgroundImage } from '@/includes/importImages';
import type { Article, Project } from '@/types';

const props = defineProps<{
    article?: Article,
    project?: Project
}>()

const article = props.article || props.project;

const imagesDirPath = props.article ? articlesImagesDirPath : projectsImagesDirPath;
</script>