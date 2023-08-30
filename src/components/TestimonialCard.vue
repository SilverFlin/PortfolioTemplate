<template>
    <div class="flex flex-col items-center justify-center w-full h-full mx-4 bg-inherit shrink-0 snap-center">
        <div class="flex justify-center">
            <quotes-svg class="text-secondary-900 dark:text-secondary-100" :width="35" :height="35"></quotes-svg>
        </div>
        <div class="flex justify-center w-full my-6 font-serif text-xl text-center dark:text-secondary-200 lg:w-2/3">
            {{ props.card.message }}
        </div>
        <div class="flex items-center justify-center">
            <div class="w-8 h-8 mr-3 bg-center bg-cover rounded-full"
                :style="getBackgroundImage(`${testimonialsImagesDirPath}/${props.card.imageName}`)">
            </div>
            <p class="font-bold text-secondary-800 dark:text-secondary-200">
                {{ props.card.name }} -
                <span class="font-normal text-secondary-600 dark:text-secondary-300">
                    {{ props.card.title }}, {{ props.card.company }}
                </span>
                <br>
                <span class="italic font-normal">{{ props.card.studyHall }}</span>
            </p>
        </div>
    </div>
</template>
<script setup lang="ts">
import type { TestimonialCardProps } from "@/types";
import { testimonialsImagesDirPath } from "@/constants/paths";
import { getBackgroundImage } from "@/includes/importImages";
import quotesSvg from "@/icons/QuotesSvg.vue";

interface Props {
    card: TestimonialCardProps;
}

const props = defineProps<Props>()
</script>