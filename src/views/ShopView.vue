<script setup lang="ts">
import BookItem from '@/components/BookItem.vue'
import type { Book } from '@/components/classes/Book'
import { onMounted, ref } from 'vue'

const books = ref<Book[] | null>(null)

async function getBooksData() {
  const response = await fetch('book.json')
  const data = await response.json()
  return data
}

onMounted(async () => {
  books.value = await getBooksData()
})
</script>

<template>
  <h1>Shop</h1>

  <BookItem
    v-for="book in books"
    :title="book.title"
    :author="book.author"
    :genre="book.genre"
    :description="book.description"
    :rating="book.rating"
    :price="book.price"
    :image="book.image"
  />
</template>
