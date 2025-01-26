<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import SideBar from './components/SideBar.vue'
import type { Book } from './components/classes/Book'
import { ref, onMounted, provide } from 'vue'

const books = ref<Book[]>([])

async function getBooksData() {
  const response = await fetch('book.json')
  const data = await response.json()
  return data
}

onMounted(async () => {
  books.value = await getBooksData()
})

provide('books', books)
</script>

<template>
  <div class="app-container">
    <SideBar />

    <RouterView />
  </div>
</template>
