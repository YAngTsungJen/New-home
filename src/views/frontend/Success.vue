<template>
  <div class="position-relative d-flex">
    <div class="container d-flex flex-column" style="min-height: 100vh;">
        <div class="row my-auto pb-7">
          <div class="col d-flex flex-column">
            <div class="text-white" style="margin-top: 280px">
              <h2>感謝您的預約</h2>
              <h2>會儘快與您聯繫。</h2>
              <router-link to="/">
                <a href="#" class="btn btn-more mt-4 px-5">回首頁</a>
              </router-link>
            </div>
          </div>
        </div>
    </div>
    <div
      class="w-md-50 w-100 position-absolute opacity-1"
      style="z-index: -1; min-height: 100vh; right: 0; background-image: url(https://images.unsplash.com/photo-1602249392692-e747e9791f94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1580&q=80);
    background-position: center center;"
    >
    </div>
  </div>
</template>
