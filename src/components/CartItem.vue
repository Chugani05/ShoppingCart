<script setup lang="ts">
import { useCart } from '@/composables/useCart'

const composable = useCart()
const prop = defineProps(['title', 'author', 'price', 'image', 'units'])
</script>

<template>
  <div class="cart-content">
    <!-- tabla de productos -->
    <div class="table-responsive mb-4">
      <table v-if="composable.getBooks().length" class="table table-hover align-middle">
        <thead class="table-light">
          <tr>
            <th scope="col"></th>
            <th scope="col">Image</th>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">Price</th>
            <th scope="col">Units</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(book, index) in composable.getBooks()" :key="index">
            <td>
              <button @click="$emit('remove', index)" class="btn btn-danger btn-sm">
                <i class="bi bi-x"></i>
              </button>
            </td>
            <td>
              <img :src="book.image" :alt="book.title + ' image'" class="item-image me-2" />
            </td>
            <td>{{ book.title }}</td>
            <td>{{ book.author }}</td>
            <td>{{ book.price.toFixed(2) }}€</td>
            <td>{{ book.units }}</td>
            <td>{{ (book.price * book.units).toFixed(2) }}€</td>
          </tr>
        </tbody>
      </table>

      <div v-else class="alert alert-warning text-center">
        Your cart is empty. Start adding some books!
      </div>
    </div>

    <!-- resumen del pedido -->
    <div class="order-summary p-4 bg-light rounded">
      <h3>Order Summary</h3>
      <div class="d-flex justify-content-between">
        <p>Subtotal:</p>
        <!-- <p>{{ calculateSubtotal() }}€</p> -->
      </div>
      <div class="d-flex justify-content-between">
        <p>IGIC (7%):</p>
        <!-- <p>{{ calculateIGIC() }}€</p> -->
      </div>
      <hr />
      <div class="d-flex justify-content-between">
        <strong>Total:</strong>
        <!-- <strong>{{ calculateTotal() }}€</strong> -->
      </div>
      <button class="btn btn-success w-100 mt-3">Proceed to Checkout</button>
    </div>
  </div>
</template>

<style scoped>
.cart-content {
  margin-top: 2rem;
  padding: 1rem;
}

.table {
  width: 100%;
  margin-top: 1rem;
  background-color: white;
  border-radius: 5px;
  overflow: hidden;
}

.item-image {
  width: 70px;
  height: 105px;
  object-fit: cover;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.order-summary {
  max-width: 400px;
  margin-left: auto;
  border: 1px solid #ddd;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.order-summary h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
</style>
