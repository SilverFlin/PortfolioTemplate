<template>
    <div class="flex flex-col justify-center max-h-screen min-h-screen py-8 overflow-hidden">
        <div @scroll="moveCarousel" ref="testimonialCarousel"
            class="flex items-center w-full px-6 m-0 overflow-scroll scroll-px-6 remove-scrollbar h-2/3 snap-x snap-mandatory max-h-2/3 min-h-2/3 bg-inherit">
            <testimonial-card v-for="card in testimonialCards" :key="card.id" :card="card"></testimonial-card>
        </div>
        <div class="flex justify-center w-1/3 h-auto mx-auto mt-3 bg-inherit">
            <div v-for="(card, idx) in testimonialCards" :key="idx" class="inline mx-2">
                <template v-if="card.isActive">
                    <Icon :width="30" class="text-secondary-900 dark:text-secondary-100" icon="line-md:circle-twotone" />
                </template>
                <template v-else>
                    <Icon @click="switchToCard($event, idx)" :width="30"
                        class="cursor-pointer text-secondary-900 dark:text-secondary-100" icon="fluent:circle-12-regular" />
                </template>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import type { Ref } from "vue"
import type { TestimonialCardProps } from '@/types'

import { ref } from "vue";
import TestimonialCard from "@/components/TestimonialCard.vue";
import { Icon } from "@iconify/vue"
import testimonialCardsData from "@/models/TestimonialCards"

const testimonialCards: Ref<TestimonialCardProps[]> = ref(testimonialCardsData)
const testimonialCarousel: Ref<Element | null> = ref(null)

const DEFAULT_MOVE_TIME = 10 * 1000
const carouselMoveTimer = ref(setInterval(autoMoveCarousel, DEFAULT_MOVE_TIME))


function autoMoveCarousel() {
    const carousel = testimonialCarousel.value
    if (!carousel) return

    if (carousel.scrollLeft === carousel.scrollWidth - carousel.clientWidth) {
        carousel.scrollLeft = 0
        return
    }
    carousel.scrollLeft += carousel.clientWidth
}


function switchToCard(_evt: Event, cardIdx: number): void {
    clearInterval(carouselMoveTimer.value)
    carouselMoveTimer.value = setInterval(autoMoveCarousel, DEFAULT_MOVE_TIME)

    const carousel = testimonialCarousel.value
    if (!carousel) return

    for (let card of testimonialCards.value) {
        card.isActive = false
    }

    testimonialCards.value[cardIdx].isActive = true
    carousel.scrollLeft = cardIdx * carousel.clientWidth
}

function moveCarousel(evt: Event): void {
    clearInterval(carouselMoveTimer.value)
    carouselMoveTimer.value = setInterval(autoMoveCarousel, DEFAULT_MOVE_TIME)

    for (let card of testimonialCards.value) {
        card.isActive = false
    }

    const target = evt.target as Element
    const carouselProgress = Math.round(target.scrollLeft / target.scrollWidth * 100)
    const percentageOfCard = 100 / testimonialCards.value.length
    const cardIndex = Math.round(carouselProgress / percentageOfCard)

    testimonialCards.value[cardIndex].isActive = true
}
</script>

<style></style>