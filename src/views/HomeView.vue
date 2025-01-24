<template>
  <div>
    <section class="welcome-section text-center">
      <h1 class="display-4 mb-3">Welcome to Book Heaven</h1>
      <p class="lead mb-4">
        Dive into a world of stories. Explore our wide collection of books across all genres and
        find your next great read.
      </p>
      <RouterLink to="/shop" class="btn btn-primary btn-lg">Start Shopping</RouterLink>
    </section>
  </div>
</template>

<style scoped>
.welcome-section {
  background-color: #f0f8ff;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.welcome-section h1 {
  font-size: 3rem;
  font-weight: bold;
}

.welcome-section p {
  font-size: 1.25rem;
}
</style>
