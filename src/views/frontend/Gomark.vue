<template>
    <div class="mt-5">
      <section class="container-fluid bg-dark py-5 text-white" style="position: relative; height:50vh">
        <div class="row">
          <div class="col-md-12 bg-cover" style="position: absolute;top: 0;bottom: 0; background-image: url(https://images.unsplash.com/photo-1468091730376-d3b5558b71ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1644&q=80)">
          </div>
        <div class="container">
          <div class="row justify-md-center align-items-center">
            <div class="col" style="margin-top:10%">
              <h2>公司標誌</h2>
            </div>
          </div>
        </div>
        </div>
      </section>
      <section class="mt-3 py-2">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/" class="text-muted">首頁</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">公司標誌</li>
          </ol>
        </nav>
      </section>
      <section class="container mt-5">
        <div class="row">
          <div class="col-md-6">
            <img src="https://images.unsplash.com/photo-1581626157227-6a0d22ac9f00?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" class="img-fluid" alt="">
          </div>
          <div class="col-md-6 text-left" style="margin-bottom:20%">
            <p>建築是永恆的藝術，房子對人的影響十分深遠，建築本身就是良心事業。英國前首相邱吉爾曽說：「人造住宅，住宅造人」，一棟良好的住宅，可以影響一個家庭的生活品質，培養下一代人格發展、身心健康，成為社會可用的人才，所以人和住宅的關係，密不可分。
            </p>
            <p class="mt-3">
              太子建設的經營理念「三好一公道」，分別為「地段好、設計好、施工好、價格公道」。在地段選擇上，以交通便利、不淹水、機能完善為優先考量。設計則以貼心、考量全家生活動線、生活機能、採光、通風及空間合理為首要。至於施工，更是不能馬虎，從地質探勘、採用最適合的基礎，注意結構安全，使用無毒建材，讓全家住得安全安心。最後是價格公道，讓購屋大眾買得起，用最輕鬆的價格，就能住進最好的住宅，是太子建設的最大信念。
            </p>
          </div>
        </div>
      </section>
    </div>
</template>

<style scoped>
.bg-cover{
  background-size: cover;
  background-position: center center;
}
</style>
