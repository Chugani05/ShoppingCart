import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { CartItem } from '@/components/classes/Book'

export const useCartStore = defineStore('cart', () => {
  const books = ref<CartItem[]>([])

  const totalPrice = computed(() => {
    let result = 0
    books.value.forEach((book) => {
      result += book.price * book.units
    })
    return result
  })

  function addBook(book: CartItem) {
    books.value.push(book)
  }

  function deleteBook(id: number) {
    books.value = books.value.filter((book: CartItem) => book.id !== id)
  }

  function updateQuantity(id: number, units: number) {
    const index = books.value.findIndex((book: CartItem) => book.id === id)

    if (index > -1) {
      books.value[index].units = units
    }
  }

  function emptyCart() {
    books.value = []
  }

  return {
    books,
    totalPrice,
    addBook,
    deleteBook,
    updateQuantity,
    emptyCart,
  }
})
