<template>
  <main
    class="h-screen overflow-scroll scroll-smooth snap-mandatory snap-y remove-scroll h-min-screen h-max-screen remove-scrollbar ">
    <introduction-section class="snap-center"></introduction-section>
    <last-projects-section class="snap-center"></last-projects-section>
    <testimonial-carousel class="snap-center"></testimonial-carousel>
    <last-articles-section class="snap-center"></last-articles-section>
  </main>
</template>

<script setup lang="ts">
import TestimonialCarousel from "@/components/TestimonialCarousel.vue";
import LastProjectsSection from "@/components/LastProjectsSection.vue";
import IntroductionSection from "@/components/IntroductionSection.vue";
import LastArticlesSection from "@/components/LastArticlesSection.vue";

</script>
 