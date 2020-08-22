<template>
  <div class="container border">
    <div class="row">
      <div class="col-12 col-md float-left ">
        <img class="img-fluid rounded" width="100%" height="500px" src="https://images.pexels.com/photos/101808/pexels-photo-101808.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt />
      </div>
      <div class="col-md-auto">
        <form @submit.prevent="signin">
          <div class="text-center">
            <h1>登入</h1>
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
          <!-- <div class="text-center">
            <button type="button" class="btn btn-danger mt-3" @click="signout">登出</button>
          </div> -->
        </form>
      </div>
    </div>
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
  //  取得
  methods: {
    // `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/products`
    signin () {
      const api = `${process.env.VUE_APP_APIPATH}auth/login` // api伺服器
      this.$http
        .post(api, this.user)
        .then((res) => {
          //  抓 api撈email和 password
          console.log(res)
          const token = res.data.token //  定義 token
          const expired = res.data.expired //  定義 到期日
          //  token 存取cookie
          document.cookie = `iscookie = ${token}; expires = ${new Date(
            expired * 1000
          )}; path=/`
          this.$router.push('admin/products')
          //  window.location = 'learn.html';
          //  不能移到 post 外面，因為非同步的觀念，會變成先轉址，在執行post
          // this.$bus.$emit('message:push',
          //   '登入成功',
          //   'success')
        })
        .catch((error) => {
          console.log(error)
          // this.$bus.$emit('message:push',
          // `登入失敗惹，好糗Σ( ° △ °|||)︴
          //   ${error}`,
          // 'danger')
        })
    },
    signout () {
      document.cookie = '`token =; expires =`'
    }
  }
}
</script>

<style>
body {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vh;
}
.btn {
  width: 50%;
}
.border{
  border:1px solid wheat;
  background: aliceblue;
  padding: 2%;
}
</style>
