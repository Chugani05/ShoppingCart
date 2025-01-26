<script setup lang="ts">
import { useCart } from '@/composables/useCart';
import { ref } from 'vue'

const prop = defineProps(['id','title', 'author', 'price', 'image', 'units'])

const composable = useCart()
const units = ref(prop.units)

function decreaseQuantity() {
  if (units.value > 1) {
    units.value--
  } else {
    composable.deleteBook(prop.id)
  }
}

function increaseQuantity() {
    units.value++
    composable.updateQuantity(prop.id, units.value)
}
</script>

<template>
  <tr>
    <td>
      <button @click="composable.deleteBook(id)" class="btn btn-danger btn-sm">
        <i class="bi bi-x"></i>
      </button>
    </td>
    <td>
      <img :src="image" :alt="title + ' image'" class="item-image me-2" />
    </td>
    <td>{{ title }}</td>
    <td>{{ author }}</td>
    <td>{{ price.toFixed(2) }}€</td>
    <td>
      <button class="btn decrement-btn" @click="decreaseQuantity">−</button>
      {{ units }}
      <button class="btn increment-btn" @click="increaseQuantity">+</button>
    </td>
    <td>{{ (price * units).toFixed(2) }}€</td>
  </tr>
</template>

<style scoped>
.item-image {
  width: 70px;
  height: 105px;
  object-fit: cover;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>
