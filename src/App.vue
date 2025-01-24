<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import SideBar from './components/SideBar.vue'
</script>

<template>
  <div class="app-container">
    <SideBar />

    <RouterView />
  </div>
</template>
