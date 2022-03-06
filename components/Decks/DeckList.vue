<template>
    <li class="decks-list-li">
        <nuxt-link class="deck" :to="`Deck/${id}`">
          <div class="card deck-card">
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
.decks-list-li {
  width: 40%;
}

.deck {
  display: block;
}

.deck-card {
  width: 100%;
  margin: 20px auto;
}

.deck-card img {
  height: 200px;
}
</style>