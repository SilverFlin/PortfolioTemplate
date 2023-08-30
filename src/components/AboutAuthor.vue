<template>
    <div class="flex items-center w-full px-6 m-auto rounded-xl ">
        <div :style="getBackgroundImage(`${baseImagesDirPath}/luistoledo.jpg`)"
            class="w-20 h-20 bg-center bg-cover rounded-full shrink-0">
        </div>
        <div class="px-8 text-sm ">
            <h1 class="mb-4 text-xl font-bold">
                About the Author
            </h1>
            <p>
                Oi mate! I'm Luis Toledo, a TinEye, duck enthusiast, and Software Engineering Student.
            </p>
            <p>
                If I'm not turning caffeine into code or trying to center a div, you'll find me discussing the best way to
                sleep.
            </p>
            <div class="flex flex-col items-center justify-center">
                <p class="mt-4">Wanna connect?</p>
                <a target=" _blank" href="https://www.linkedin.com/in/luis-angel-toledo-russo-19093822a/"
                    class="rounded-full cursor-pointer ">
                    <Icon width="35" icon="mdi:linkedin" />
                </a>
            </div>
        </div>



    </div>
</template>

<script setup lang="ts">
import { getBackgroundImage } from '@/includes/importImages';
import { baseImagesDirPath } from '@/constants/paths';
import { Icon } from '@iconify/vue';
</script>