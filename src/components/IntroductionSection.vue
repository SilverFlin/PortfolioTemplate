<template>
    <div class="flex justify-center w-full h-screen max-h-screen min-h-screen overflow-hidden">
        <div class="flex flex-col items-center w-1/2 justify-evenly dark:text-secondary-100 ">
            <h1 class="font-sans text-center text-8xl lg:text-9xl">I'm Luis Toledo</h1>
            <p class="font-mono text-5xl text-center">A Software Engineer</p>
        </div>
        <div class="hidden lg:block w-1/2 h-full bg-inherit bg-center bg-contain bg-no-repeat scale-x-[-1]"
            :style="getBackgroundImage(`${homeImagesDirPath}/introduction.png`)">

        </div>

    </div>
</template>
<script setup lang="ts">
import { homeImagesDirPath } from "@/constants/paths";
import { getBackgroundImage } from "@/includes/importImages";

</script>