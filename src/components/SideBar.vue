<template>
  <div class="d-flex flex-column flex-shrink-0 bg-body-tertiary" style="width: 4.5rem">
    <a
      href="/"
      class="d-block p-3 link-body-emphasis text-decoration-none"
      data-bs-toggle="tooltip"
      data-bs-placement="right"
      data-bs-original-title="Icon-only"
    >
    <i class="bi bi-book" width="50" height="50"></i>
      <span class="visually-hidden">Icon-only</span>
    </a>
    <ul class="nav nav-pills nav-flush flex-column mb-auto text-center">
      <li class="nav-item">
        <RouterLink 
          to="/shop"
          class="nav-link active py-3 border-bottom rounded-0"
          aria-current="page"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          aria-label="Home"
          data-bs-original-title="Home"
        >
          <i class="bi bi-house"></i>
        </RouterLink>
      </li>
      <li>
        <RouterLink 
          to="/shop"
          class="nav-link py-3 border-bottom rounded-0"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          aria-label="Dashboard"
          data-bs-original-title="Dashboard"
        >
          <i class="bi bi-shop"></i>
        </RouterLink >
      </li>
      <li>
        <RouterLink 
          to="/cart"
          class="nav-link py-3 border-bottom rounded-0"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          aria-label="Orders"
          data-bs-original-title="Orders"
        >
          <i class="bi bi-cart2"></i>
        </RouterLink >
      </li>
    </ul>
  </div>
</template>
