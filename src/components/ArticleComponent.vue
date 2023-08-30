<template>
    <div class="h-screen min-h-screen">

        <article-header v-if="article" :article="article"></article-header>

        <article class="px-4 mb-4 py-2 prose dark:prose-invert dark:bg-cool-black lg:prose-2xl bg-[white] m-auto">
            <component :is="article?.component" />
            <hr>
            <about-author class="not-prose"></about-author>
        </article>


        <div class="">
            <!-- TODO Tags and links -->
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import 'highlight.js/lib/common';
import type { Article } from '@/types';
import { getArticleById } from '@/content';
import { ref, shallowRef } from 'vue';
import ArticleHeader from '@/components/ArticleHeader.vue';
import AboutAuthor from '@/components/AboutAuthor.vue';

const route = useRoute();
const router = useRouter()

let article = ref();
getArticleById(route.params.id as string)
    .then((a: Article) => {
        a.component = shallowRef(a.component)
        article.value = a;
    })
    .catch(() => {
        console.error("Article not found")
        router.push({ name: 'home' })
    })

</script>