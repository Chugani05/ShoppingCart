<script setup lang="ts">
import { useCart } from '@/composables/useCart'
import CartItem from '@/components/CartItem.vue'

const composable = useCart()
</script>

<template>
  <div class="cart-container container my-4">
    <h1 class="mb-4">Your Cart</h1>

    <div class="table-responsive mb-4">
      <CartItem :books="composable.getBooks()" />
    </div>
  </div>
</template>

<style scoped>
.cart-container {
  margin-top: 2rem;
  margin-right: 1rem;
  margin-left: 6rem;
}
</style>
