<template>
  <div>
    <section class="container mt-5" style="margin-bottom: 350px">
      <div class="row">
        <div class="col mt-5 d-flex justify-content-center">
          <form @submit.prevent="signin">
            <div class="text-center">
              <h2>登入</h2>
            </div>
            <div class="form-group text-left">
              <label for="email">信箱</label>
              <input
                type="email"
                class="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                v-model="user.email"
                required
                autofocus
              />
            </div>
            <div class="form-group text-left">
              <label for="password">密碼</label>
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Password"
                v-model="user.password"
                required
              />
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-primary mt-3">登入</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    signin () {
      const api = `${process.env.VUE_APP_APIPATH}auth/login` // api伺服器
      this.$http
        .post(api, this.user)
        .then((res) => {
          //  抓 api撈email和 password
          const token = res.data.token //  定義 token
          const expired = res.data.expired //  定義 到期日
          //  token 存取cookie
          document.cookie = `iscookie = ${token}; expires = ${new Date(
            expired * 1000
          )}; path=/`
          this.$router.push('admin/products')
          this.$bus.$emit('msg:push',
            '登入成功',
            'success')
        })
        .catch((danger) => {
          this.$bus.$emit('msg:push',
          `登入失敗惹，好糗Σ( ° △ °|||)︴
            ${danger}`,
          'danger')
        })
    }
  }
}
</script>
