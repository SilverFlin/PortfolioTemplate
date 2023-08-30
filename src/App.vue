<template>
  <header-component></header-component>
  <router-view @click="closeNavMenuIfExist" @scroll="closeNavMenuIfExist">
  </router-view>
</template>

<script setup lang="ts">
import HeaderComponent from "@/components/HeaderComponent.vue";
import { useNavMenu } from "@/stores/navMenu";
const navMenuStore = useNavMenu();

function closeNavMenuIfExist() {
  if (navMenuStore.isOpen) {
    navMenuStore.close()
  }
}

</script>

<style>
html,
body {
  max-width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
}
</style>