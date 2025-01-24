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
  <div class="shop-container">
    <h1 class="text-center mb-4">Book Heaven</h1>

    <div class="book-grid d-flex flex-wrap gap-3 justify-content-center">
      <BookItem
        v-for="(book, index) in books"
        :key="index"
        :title="book.title"
        :author="book.author"
        :genre="book.genre"
        :description="book.description"
        :rating="book.rating"
        :price="book.price"
        :image="book.image"
      />
    </div>
  </div>
</template>

<style scoped>
.shop-container {
  margin-top: 2rem;
  margin-right: 1rem;
  margin-left: 6rem;
}

.book-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: flex-start;
}

/* 3 columnas en pantallas grandes */
.book-grid > * {
  flex: 1 1 calc(33.33% - 1.5rem);
  max-width: calc(33.33% - 1.5rem);
  min-width: 250px;
}

/* 2 columna en pantallas medianas */
@media (max-width: 1200px) {
  .book-grid > * {
    flex: 1 1 calc(50% - 1rem);
    max-width: calc(50% - 1rem);
  }
}

/* 1 columna en pantallas pequeñas */
@media (max-width: 850px) {
  .book-grid > * {
    flex: 1 1 100%;
    max-width: 100%;
  }
}
</style>
