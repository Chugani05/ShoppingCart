<script setup lang="ts">
import { ref } from 'vue'
import { useCart } from '@/composables/useCart'
const prop = defineProps([
  'title',
  'author',
  'genre',
  'description',
  'rating',
  'price',
  'image',
  'stock',
])
const composable = useCart()
const selected = ref(false)
const quantity = ref(1)

function decreaseQuantity() {
  if (quantity.value > 1) {
    quantity.value--
  }
}

function increaseQuantity() {
  if (quantity.value < prop.stock) {
    quantity.value++
  }
}

function addToCart() {
  selected.value = false
  const item = composable.toCartItem(
    prop.id,
    prop.title,
    prop.author,
    prop.price,
    quantity.value,
    prop.image,
  )
  composable.addBook(item)
}
</script>

<template>
  <div class="card d-flex flex-row align-items-center p-3" style="width: 100%; max-width: 600px">
    <img :src="image" :alt="title + '-image'" class="card-img" />
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{ author }}</h6>
      <p class="card-text">
        <strong>Genre:</strong> {{ genre }} <br />
        <strong>Description:</strong> {{ description }} <br />
        <strong>Rating:</strong> {{ rating }} ⭐ <br />
        <strong>Price:</strong> {{ price }}€
      </p>

      <div
        class="d-flex justify-content-end align-items-center quantity-container"
        v-if="stock > 0"
      >
        <div v-if="!selected">
          <button class="btn btn-primary" @click="selected = true">Add to Cart</button>
        </div>
        <div v-else class="quantity-selector d-flex align-items-center">
          <button class="btn decrement-btn" @click="decreaseQuantity">−</button>
          <div class="quantity-display mx-2">{{ quantity }}</div>
          <button class="btn increment-btn" @click="increaseQuantity">+</button>
          <button class="btn btn-success confirm-btn ms-3" @click="addToCart">
            <i class="bi bi-check"></i>
          </button>
          <button class="btn btn-danger ms-2" @click="selected = false">
            <i class="bi bi-x"></i>
          </button>
        </div>
      </div>
      <div v-else>
        <p>Not in stock</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  margin: 1rem auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: none;
}

.card-img {
  width: 180px;
  height: 280px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 1rem;
}

.card-body {
  flex: 1;
}
</style>
