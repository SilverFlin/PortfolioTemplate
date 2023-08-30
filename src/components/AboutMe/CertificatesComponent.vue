<template>
    <div>
        <h1 class="text-3xl font-bold text-center uppercase">Certificates</h1>
        <div class="h-full mt-3">
            <ul class="flex flex-col flex-wrap h-full">
                <li v-for="(course, idx) in courses" :key="idx" class="flex mt-4 hover:bg-secondary-200 cursor:pointer">
                    <Icon class="inline" height="20" :icon="course.icon" />
                    <a class="inline ml-3" :href="course.link" target="_blank">
                        {{ course.name }}
                    </a>
                </li>
            </ul>

        </div>
    </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';


// TODO move to a json file or models
const courses = [
    {
        name: 'Linux CL',
        icon: 'logos:udemy-icon',
        link: 'https://www.udemy.com/certificate/UC-fec9e102-9d95-4b27-b7ac-928f8e4f32e3/'
    },
    {
        name: 'NodeJS Developer',
        icon: 'logos:udemy-icon',
        link: 'https://www.udemy.com/certificate/UC-c7bc23e0-d8af-4840-a835-340d3ed4d3c7/'
    },
    {
        name: 'TypeScript',
        icon: 'logos:udemy-icon',
        link: 'https://www.udemy.com/certificate/UC-35d2dcc2-9999-4dc6-a2a8-3b499e4183b7/'
    },
    {
        name: 'JavaScript: Advanced Concepts',
        icon: 'logos:udemy-icon',
        link: 'https://www.udemy.com/certificate/UC-f5a6da70-e657-40cb-b196-fc08d4207f7f/'
    },
    {
        name: 'Git & GitHub',
        icon: 'logos:udemy-icon',
        link: 'https://www.udemy.com/certificate/UC-748d1731-e7f4-4e3d-b932-9449aa0c4d02/'
    },
    {
        name: 'MYSQL',
        icon: 'logos:udemy-icon',
        link: 'https://www.udemy.com/certificate/UC-aab3ec7c-a022-4ac6-80d3-9dfd1d59c80d/'
    },
    {
        name: 'The Web Developer Bootcamp',
        icon: 'logos:udemy-icon',
        link: 'https://www.udemy.com/certificate/UC-ca96b063-0325-48c1-bb83-5ad2f1e26a02/'
    },
    {
        name: 'JavaScript: Intermediate',
        icon: 'simple-icons:hackerrank',
        link: 'https://www.hackerrank.com/certificates/69a30d3b392e'
    }

]
</script>