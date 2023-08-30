<template>
    <section @click="loadArticle"
        class="lg:hover:drop-shadow-[0_10px_10px_black] w-60 p-0 mx-6 my-5 bg-[#B8B2A7] rounded-lg lg:hover:scale-110 h-[25rem] lg:hover:rotate-2 hover:cursor-pointer shrink-0 grow-0 max-h-[100%] max-w-[100%] overflow-hidden">
        <div class="w-full bg-center bg-cover rounded-t-lg h-1/2"
            :style="getBackgroundImage(`${articlesImagesDirPath}/${props.card.imageName}`)">
        </div>
        <div class="p-3">
            <h1 class="relative text-xl font-bold uppercase line-clamp-3 text-[#27241D]">
                {{ props.card.title }}
            </h1>
            <span class="font-mono right-0 text-base text-[#E8E6E1] lowercase">
                {{ props.card.date.toLocaleString('default', { month: 'short', year: "numeric" }) }}
            </span>
            <div class="flex justify-around mt-8">

                <span v-for="technology of firstTwoTechnologies" :key="technology.name"
                    class="px-2 py-0 text-sm rounded-full" :style="{ backgroundColor: `${technology.color}` }">
                    {{ technology.name }}
                </span>

                <span v-if="restOfTechnologies.length > 0" class="px-2 py-0 text-sm rounded-full bg-[#87EAF2]">
                    +{{ restOfTechnologies.length }}
                </span>

            </div>

        </div>
    </section>
</template>

<script setup lang="ts">
import type { Article, TechnologyLabel } from "@/types";
import { articlesImagesDirPath } from "@/constants/paths";
import router from "@/router";
import { getBackgroundImage } from "@/includes/importImages";

const props = defineProps<{ card: Article }>()

const firstTwoTechnologies: TechnologyLabel[] = props.card.tags.slice(0, 2);
const restOfTechnologies: TechnologyLabel[] = props.card.tags.slice(2);

function loadArticle(): void {
    router.push(`/articles/${props.card.id}`);
}

</script>