<script setup lang="ts">
import { useCart } from '@/composables/useCart'
import CartItem from '@/components/CartItem.vue'

const composable = useCart()
</script>

<template>
  <div class="cart-container">
    <h1 class="mb-4">Your Cart</h1>

    <!-- tabla de productos -->
    <div v-if="composable.getBooks().length" class="mb-4">
      <div class="row">
        <div class="col-9">
          <table class="table table-hover align-middle">
            <thead class="table-light">
              <tr>
                <th scope="col"></th>
                <th scope="col">Cover</th>
                <th scope="col">Title</th>
                <th scope="col">Author</th>
                <th scope="col">Price</th>
                <th scope="col">Units</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
              <CartItem
                v-for="(book, index) in composable.getBooks()"
                :key="index"
                :id="book.id"
                :title="book.title"
                :author="book.author"
                :price="book.price"
                :image="book.image"
                :units="book.units"
              />
            </tbody>
          </table>
        </div>
        <div class="col">
          <!-- resumen del pedido -->
          <div class="order-summary p-4 bg-light rounded col">
            <h3>Order Summary</h3>
            <div class="d-flex justify-content-between">
              <p>Subtotal:</p>
              <p>{{ composable.calculateSubtotal().toFixed(2) }}€</p>
            </div>
            <div class="d-flex justify-content-between">
              <p>IGIC (7%):</p>
              <p>{{ composable.calculateIGIC().toFixed(2) }}€</p>
            </div>
            <hr />
            <div class="d-flex justify-content-between">
              <strong>Total:</strong>
              <strong>{{ composable.calculateTotal().toFixed(2) }}€</strong>
            </div>
            <button class="btn btn-success w-100 mt-3">Proceed to Checkout</button>
            <p class="text-center mt-4">-o-</p>
            <button class="btn btn-danger w-100 mt-2" @click="composable.emptyCart">Empty Cart</button>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="alert alert-warning text-center">
      Your cart is empty. Start adding some books!
    </div>
  </div>
</template>

<style scoped>
.cart-container {
  margin-top: 2rem;
  margin-right: 1rem;
  margin-left: 6rem;
}

.table {
  width: 100%;
  margin-top: 1rem;
  background-color: white;
  border-radius: 5px;
  overflow: hidden;
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
