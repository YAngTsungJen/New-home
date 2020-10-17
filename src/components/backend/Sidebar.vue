<template>
  <div>
    <nav class="col-md-2 d-none d-md-block bg-light sidebar mt-5">
      <div class="sidebar-sticky">
        <h5 class="sidebar-heading d-flex
          justify-content-between align-items-center
          px-3 mt-4 mb-2 text-muted">
          管理員
        </h5>
        <ul class="nav flex-column mb-2">
          <li class="nav-item">
            <router-link class="nav-link"
                        to="/admin/products">
              <i class="fas fa-box-open"></i>
              產品列表
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link"
                        to="/admin/order">
              <i class="far fa-list-alt"></i>
              訂單列表
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link"
                        to="/admin/coupons">
              <i class="fas fa-ticket-alt"></i>
              優惠券
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link"
                        to="/admin/storages">
              <i class="far fa-images"></i>
              圖片儲存列表
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
