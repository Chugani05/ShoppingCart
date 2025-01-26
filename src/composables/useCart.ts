import { useCartStore } from '@/stores/cart'
import type { CartItem } from '@/components/classes/Book'
import { reactive } from 'vue'

export function useCart() {
  const store = useCartStore()

  function toCartItem(
    id: number,
    title: string,
    author: string,
    price: number,
    units: number,
    image: string,
    stock: number,
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
    const index = store.books.findIndex((book: CartItem) => book.id === item.id)

    if (index > -1) {
      store.updateQuantity(item.id, item.units, true)
    } else {
      store.addBook(item)
    }
  }

  function deleteBook(id: number) {
    store.deleteBook(id)
  }

  function updateQuantity(id: number, units: number) {
    store.updateQuantity(id, units)
  }

  function emptyCart() {
    store.emptyCart()
  }
  
  function calculateSubtotal() {
    return store.totalPrice
  }

  function calculateIGIC() {
    return calculateSubtotal() * 0.07
  }

  function calculateTotal() {
    return calculateSubtotal() + calculateIGIC()
  }

  return {
    toCartItem,
    getBooks,
    addBook,
    emptyCart,
    deleteBook,
    updateQuantity,
    calculateSubtotal,
    calculateIGIC,
    calculateTotal
  }
}
