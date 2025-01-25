import { useCartStore } from '@/stores/cart'
import type { Book, CartItem } from '@/components/classes/Book'
import { reactive } from 'vue'
import BookItem from '@/components/BookItem.vue'

export function useCart() {
  const store = useCartStore()

  function toCartItem(
    id: number,
    title: string,
    author: string,
    price: number,
    units: number,
    image: string,
  ): CartItem {
    return reactive({
      id: id,
      title: title,
      author: author,
      price: price,
      units: units,
      image: image,
    })
  }

  function getBooks() {
    return store.books
  }

  function addBook(item: CartItem) {
    console.log(item)
  }

  function deleteBook() {}
  function updateQuantity() {}
  function emptyCart() {}

  return {
    toCartItem,
    getBooks,
    addBook,
  }
}
