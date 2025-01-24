<script setup lang="ts">
const prop = defineProps(['title', 'author', 'genre', 'description', 'rating', 'price', 'image'])
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
      <div class="d-flex justify-content-end">
        <a href="#" class="btn btn-primary">Add to Cart</a>
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
  width: 150px;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 1rem;
}

.card-body {
  flex: 1;
}
</style>
