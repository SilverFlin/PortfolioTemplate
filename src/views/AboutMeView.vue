<template>
    <div class="flex flex-row w-screen h-screen min-h-screen dark:text-secondary-200">
        <div class="flex flex-col justify-around w-1/6 h-full py-8 bg-green-300">
            <left-label :setCurrentViewIndex="setCurrentViewIndex" :indexComponent="innerViews.indexOf(WhoAmIComponent)"
                :currentViewIndex="currentViewIndex">
                <template #text>
                    Who Am I?
                </template>
                <template #icon>
                    <Icon width="25" icon="pajamas:question" />
                </template>
            </left-label>
            <left-label :setCurrentViewIndex="setCurrentViewIndex" :indexComponent="innerViews.indexOf(EducationComponent)"
                :currentViewIndex="currentViewIndex">

                <template #text>
                    Education
                </template>
                <template #icon>
                    <Icon width="25" icon="mdi:school" />
                </template>

            </left-label>

            <left-label :setCurrentViewIndex="setCurrentViewIndex" :indexComponent="innerViews.indexOf(ExperienceComponent)"
                :currentViewIndex="currentViewIndex">

                <template #text>
                    Experience
                </template>
                <template #icon>
                    <Icon width="25" icon="mdi:briefcase" />
                </template>

            </left-label>
        </div>

        <div class="flex flex-col items-center justify-start w-4/6 ">
            <div :style="getBackgroundImage(`${baseImagesDirPath}/luistoledo.jpg`)"
                class="w-32 h-32 mt-12 bg-center bg-cover rounded-full shrink-0">
            </div>
            <div class="">
                <h2 @click="downloadResume"
                    class="mb-8 text-xl font-bold text-center underline uppercase cursor-pointer hover:text-2xl text-primary-800 dark:text-secondary-200">
                    Download My Resume
                </h2>
            </div>


            <div class="my-auto">
                <component :is="innerViews[currentViewIndex]">
                </component>
            </div>

            <div class="flex justify-around w-full mt-auto mb-5">
                <a target="_blank" href="https://www.linkedin.com/in/luis-angel-toledo-russo-19093822a/"
                    class="w-10 h-10 p-2 bg-red-200 rounded-full cursor-pointer">
                    <Icon width="35" icon="line-md:linkedin" />
                </a>
                <a target="_blank" href="https://github.com/SilverFlin"
                    class="w-10 h-10 p-2 bg-red-200 rounded-full cursor-pointer">
                    <Icon width="35" icon="line-md:github-loop" />
                </a>
                <a href="mailto:toledorusso@outlook.com" class="w-10 h-10 p-2 bg-red-200 rounded-full cursor-pointer">
                    <Icon width="35" icon="line-md:email" />
                </a>
            </div>
        </div>

        <div class="flex flex-col items-end justify-around w-1/6 h-full py-8 bg-green-300">

            <right-label :setCurrentViewIndex="setCurrentViewIndex"
                :indexComponent="innerViews.indexOf(CertificatesComponent)" :currentViewIndex="currentViewIndex">

                <template #text>
                    Certificates
                </template>
                <template #icon>
                    <Icon width="25" icon="mdi:certificate" />
                </template>

            </right-label>
            <right-label :setCurrentViewIndex="setCurrentViewIndex" :indexComponent="innerViews.indexOf(SkillsComponent)"
                :currentViewIndex="currentViewIndex">
                <template #text>
                    Skills
                </template>
                <template #icon>
                    <Icon width="25" icon="mdi:star" />
                </template>
            </right-label>
            <right-label :setCurrentViewIndex="setCurrentViewIndex" :indexComponent="innerViews.indexOf(HobbiesComponent)"
                :currentViewIndex="currentViewIndex">
                <template #text>
                    Hobbies
                </template>
                <template #icon>
                    <Icon width="25" icon="mdi:heart" />
                </template>
            </right-label>

        </div>
    </div>
</template>
<script setup lang="ts">
import WhoAmIComponent from '@/components/AboutMe/WhoAmIComponent.vue';
import EducationComponent from '@/components/AboutMe/EducationComponent.vue';
import ExperienceComponent from '@/components/AboutMe/ExperienceComponent.vue';
import CertificatesComponent from '@/components/AboutMe/CertificatesComponent.vue';
import SkillsComponent from '@/components/AboutMe/SkillsComponent.vue';
import HobbiesComponent from '@/components/AboutMe/HobbiesComponent.vue';

import LeftLabel from '@/components/LeftLabel.vue';
import RightLabel from '@/components/RightLabel.vue';

import { getBackgroundImage } from '@/includes/importImages';

import { Icon } from '@iconify/vue';

import { ref } from 'vue'
import { baseImagesDirPath } from '@/constants/paths';
import { getFileURL } from '@/includes/importFiles';

const innerViews = [
    WhoAmIComponent,
    EducationComponent,
    ExperienceComponent,
    CertificatesComponent,
    SkillsComponent,
    HobbiesComponent
]

const currentViewIndex = ref(0)

function setCurrentViewIndex(index: number) {
    currentViewIndex.value = index;
}

function downloadResume() {
    window.open(getFileURL('Luis_Toledo_Resume.pdf'), '_blank');
}

</script>