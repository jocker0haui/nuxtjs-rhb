<template>
  <div>
	  <h1>Profile</h1>
  	<button class="btn btn_danger" @click="logout">
      Logout
    </button>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  middleware : ['checkAuth','auth'] ,
  methods: {
    logout(){
      this.$store.dispatch('logout')
      this.$router.push('/')
    }
  },
}
</script>
