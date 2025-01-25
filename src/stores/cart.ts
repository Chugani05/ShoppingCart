import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Book } from '@/components/classes/Book'

const useCartStore = defineStore('cart', () => {
  const books = ref<Book[]>([])

  const totalPrice = computed(() => {
    let result = 0
    books.value.forEach((book) => {
      result += book.price * book.quantity
    })
    return result
  })

  function addBook(book: Book) {
    books.value.push(book)
  }

  function deleteBook(id: number) {

  }

  function updateQuantity(id: number, quantity: number) {

  }

  function emptyCart() {
    books.value = []
  }

})