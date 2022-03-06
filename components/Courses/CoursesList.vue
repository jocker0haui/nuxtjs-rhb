<template>
    <li class="courses-list-li">
        <nuxt-link class="course" :to="`courses/${id}`">
          <div class="card course-card">
            <img :src="thumbnail" :alt="name" />
            <div class="card_body">
              <h3>{{name}}</h3>
              <p> {{description}} </p>
            </div>
          </div>
        </nuxt-link>
      </li>
</template>
<script>
export default {
    props : {
        id : {
            type : String ,
            require : true ,
            default : ''
        } ,
        name : {
            type : String ,
            require : true ,
            default : ''
        } ,
        description: {
            type : String ,
            require : true ,
            default : ''
        } ,
        thumbnail: {
            type : String ,
            require : true ,
            default : ''
        } ,
    }
}
</script>

<style scoped>
.courses-list-li {
  width: 40%;
}

.course {
  display: block;
}

.course-card {
  width: 100%;
  margin: 20px auto;
}

.course-card img {
  height: 200px;
}
</style>