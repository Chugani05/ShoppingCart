<template>
  <div
    class="d-flex flex-column flex-shrink-0 bg-body-tertiary sidebar"
    style="width: 4.5rem; height: 100vh"
  >
    <RouterLink
      to="/home"
      class="d-flex align-items-center justify-content-center p-3 link-body-emphasis text-decoration-none"
      data-bs-toggle="tooltip"
      data-bs-placement="right"
      aria-label="Home"
      data-bs-original-title="Home"
    >
      <i class="bi bi-book fs-3"></i>
    </RouterLink>
    <ul class="nav nav-pills nav-flush flex-column mb-auto text-center">
      <li class="nav-item">
        <RouterLink
          to="/home"
          class="nav-link py-3 border-bottom rounded-0"
          aria-current="page"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          aria-label="Home"
          data-bs-original-title="Home"
        >
          <i class="bi bi-house fs-4"></i>
        </RouterLink>
      </li>
      <li>
        <RouterLink
          to="/shop"
          class="nav-link py-3 border-bottom rounded-0"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          aria-label="Shop"
          data-bs-original-title="Shop"
        >
          <i class="bi bi-shop fs-4"></i>
        </RouterLink>
      </li>
      <li>
        <RouterLink
          to="/cart"
          class="nav-link py-3 border-bottom rounded-0"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          aria-label="Cart"
          data-bs-original-title="Cart"
        >
          <i class="bi bi-cart2 fs-4"></i>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1030;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.nav-link {
  color: #6c757d;
  transition:
    color 0.2s,
    background-color 0.2s;
}

.nav-link.active {
  color: #fff;
  background-color: #0d6efd;
}

.nav-link:hover {
  color: #0d6efd;
}
</style>
