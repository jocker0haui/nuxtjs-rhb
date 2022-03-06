<template>
  <section class="page">
    <div class="card card-form">
      <div class="card_body">
        <h3 class="text_center">Login</h3>
        <form action="" @submit.prevent="onSubmit">
          <div class="form_group">
            <label for="email">Email</label>
            <input
              id="email"
              v-model="email"
              class="form_control"
              type="text"
              placeholder="adu@gmail.com"
            />
          </div>
          <div class="form_group">
            <label for="password">Password</label>
            <input
              id="password"
              v-model="password"
              class="form_control"
              type="text"
              placeholder="vui lòng nhập mk"
            />
          </div>
          <div class="form_group">
            <button type="submit" class="btn btn_success btn-block">
              Login
            </button>
          </div>
        </form>
        <div class="text_center other">
          <span>
            Have not your accounts ?
            <nuxt-link to="/login"> register here </nuxt-link>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'IndexPage',
  layout: 'auth',
  data() {
    return {
      email: '',
      password: '',
      isLogin: true,
    }
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch('authenticationUser', {
          email: this.email,
          password: this.password,
          returnSecureToken: true,
          isLogin: this.isLogin,
        })
        .then((result) => {
          // console.log(result)
          if(result.success){
            this.$router.push('/')
          }
        })
        .catch((e)=>{alert(e.data.error.message)})
      // const API_KEY = process.env.firebaseAPIKEY
      // this.$axios
      //   .$post(
      //     `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
      //     {
      //       email: this.email,
      //       password: this.password,
      //       returnSecureToken: true,
      //     }
      //   )
      //   .then((result) => {
      //     console.log(result)
      //     this.$router.push('/')
      //   })
      //   .catch((e) => alert(e))
    },
  },
}
</script>

<style scoped>
.page {
  display: flex;
  justify-content: center;
  padding-top: 50px;
}

.page .card-form {
  width: 500px;
}

.btn-block {
  width: 100%;
}
</style>