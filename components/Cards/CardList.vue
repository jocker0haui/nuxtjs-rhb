<template>
  <div class="c_3 card" >
    <div class="front-card">
      <img :src="thumbnail" />
    </div>
    <div class="back-card">
      <h6>{{keyword}}</h6>
    </div>
  </div>
</template>

<script>
export default {
    props : {
        id : {
            type : Number ,
            require : true,
            default : 0
        },
        keyword : {
            type : String ,
            require : true,
            default : ''
        },
        thumbnail : {
            type : String ,
            require : true,
            default : ''
        },
    }
}
</script>

<style scoped>
.card {
  padding: 10px;
  display: flex;
}

.card img {
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
}

</style>