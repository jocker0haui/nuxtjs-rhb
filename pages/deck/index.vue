<template>
  <div class="ct">
    <h1>List of your deck</h1>
    <button class="btn btn_success" @click="openModal">Create deck</button>

    <ul class="decks-list">
      <DeckList
        v-for="deck in decks"
        :id="deck.id"
        :key="deck.id"
        :name="deck.name"
        :description="deck.description"
        :thumbnail="deck.thumbnail"
      />
    </ul>

    <!-- <v-modal name="modaldeck">
      <div class="modaldeck-body">
        <h1>Create a new deck</h1>
        <DeckForm @submitDeck="onSubmit" />
      </div>
    </v-modal> -->
  </div>
</template>

<script>

import DeckList from '@/components/Decks/DeckList'
// import DeckForm from '@/components/Decks/DeckForm'
export default {
  name: 'IndexPage',
  components: {
    DeckList,
    // DeckForm,
  },
      middleware : ['checkAuth','auth'] ,
  // asyncData() {
  //   return new Promise((resolve,reject)=>{
  //       resolve({
  //         adu : 'adu'
  //       })
  //       // throw error
  //   })
  //   .then((data)=>{
  //     console.log(data)
  //   })
  //   .catch((e)=>{
  //     console.log(e)
  //   })
  // },
  data() {
    return {
      decks: [
        // {
        //   id : 1 ,
        //   name : 'adu',
        //   description : 'adu' ,
        //   thumbnail : 'adu'
        // }
      ],
    }
  },
  head : {
    title : 'decks'
  },
  created() {
    // this.$store.dispatch('setDecks',this.decks)
    this.decks = this.$store.getters.decks
  },
  methods: {
    openModal() {
      this.$modal.open({ name: 'modaldeck' })
    },
   
  },
}
</script>

<style scoped>
.decks-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

</style>