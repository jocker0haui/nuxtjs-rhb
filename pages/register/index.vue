<template>
  <section class="page">
    <div class="card card-form">
      <div class="card_body">
        <h3 class="text_center">Register</h3>
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
            <label for="re-password">Re-Password</label>
            <input
              id="re-password"
              v-model="rePassword"
              class="form_control"
              type="text"
              placeholder="vui lòng nhập lại mk"
            />
          </div>
          <div class="form_group">
            <button type="submit" class="btn btn_success btn-block">
              Register
            </button>
          </div>
        </form>
        <div class="text_center other">
          <span>
            Have your accounts ?
            <nuxt-link to="/login"> login here </nuxt-link>
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
      rePassword: '',
    }
  },
  methods: {
    checkValidPassword() {
      return this.password === this.rePassword
    },
    onSubmit() {
      const validPassword = this.checkValidPassword()
      if (validPassword) {
        this.$store.dispatch('authenticationUser', {
            email: this.email,
            password: this.password,
            returnSecureToken: true,
            isLogin: false,
        }).then((result)=>{
          // console.log(result)
          if(result.success){
            this.$router.push('/')
          }
        })
        .catch((e)=>{alert(e.data.error.message)})
        // const API_KEY = process.env.firebaseAPIKEY
        // this.$axios
        //   .$post(
        //     `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
        //     {
        //       email: this.email,
        //       password: this.password,
        //       returnSecureToken: true,
        //     }
        //   )
        //   .then((result) => {
        //     console.log(result)
        //   })
        //   .catch((e) => alert(e))
      } else {
        alert('password is not valid')
      }
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